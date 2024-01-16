import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../../../config';
import Pagination from '../../common/Pagination';
import '../../common/Pagination.css';

interface User {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  premium: boolean;
  created_at: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(20);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Token d\'authentification manquant');
        return;
      }

      try {
        const response = await fetch(`${API_BASE_URL}/users`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(typeof error === 'string' ? error : error.message);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = searchTerm
    ? users.filter(user => user.email.toLowerCase().includes(searchTerm.toLowerCase()))
    : users;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const sortUsers = (field) => {
    const sortedUsers = [...users].sort((a, b) => {
      if (field === 'created_at') {
        return new Date(a[field]) - new Date(b[field]);
      } else if (field === 'premium') {
        return (a[field] === b[field]) ? 0 : a[field] ? -1 : 1;
      } else {
        return a[field].localeCompare(b[field]);
      }
    });
    setUsers(sortedUsers);
  };

  return (
    <div>
      {error && <div className="error">{error}</div>}

      <input
        type="text"
        placeholder="Recherche par e-mail..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <h2>Liste des utilisateurs</h2>
      <div className="table-responsive"> 

      <table className="table">
        <thead>
          <tr>
            <th onClick={() => sortUsers('nom')}>Nom</th>
            <th onClick={() => sortUsers('prenom')}>Prénom</th>
            <th>Email</th>
            <th onClick={() => sortUsers('created_at')}>Inscrit Le</th>
            <th onClick={() => sortUsers('premium')}>Premium</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={user.id} className={`table-row ${index % 2 === 0 ? 'bg-sky-100' : 'bg-sky-200'}`}>
              <td>{user.nom}</td>
              <td>{user.prenom}</td>
              <td>{user.email}</td>
              <td>{new Date(user.created_at).toLocaleDateString('fr-FR')}</td>
              <td>{user.premium ? 'Oui' : 'Non'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <Pagination    usersPerPage={usersPerPage}
    totalUsers={filteredUsers.length}
    paginate={paginate} />
    </div>
  );
};

export default UserList;

import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.css'; // Assurez-vous que le chemin d'accès est correct

const NotFound: React.FC = () => {
  return (
    <div className="not-found-container">
      <div className="svg">
      <svg version="1.1" id="svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="250px" height="112px" viewBox="0 0 3462.869 1552" enableBackground="new 0 0 3462.869 1552" xmlSpace="preserve">
    <path d="M806.917,363.94V107.66l221.833,128.139L806.917,363.94"/>
    <path fillOpacity="0.7" d="M96.747,501.107V244.822l221.834,128.137L96.747,501.107"/>
    <path fillOpacity="0.7" d="M96.747,774.959V518.674l221.834,128.144L96.747,774.959"/>
    <path fillOpacity="0.6" d="M323.632,364.14V107.847L101.798,235.989L323.632,364.14"/>
    <path fillOpacity="0.5" d="M323.632,637.688V381.404L101.798,509.547L323.632,637.688"/>
    <path fillOpacity="0.85" d="M806.917,637.787V381.502l221.833,128.144L806.917,637.787"/>
    <path fillOpacity="0.7" d="M1032.306,774.368V518.083L810.481,646.231L1032.306,774.368"/>
    <path fillOpacity="0.7" d="M1032.306,501.107V244.822L810.481,372.966L1032.306,501.107"/>
    <path fillOpacity="0.7" d="M332.96,911.501V655.216l221.839,128.142L332.96,911.501"/>
    <path fillOpacity="0.7" d="M323.632,911.529V655.25L101.798,783.386L323.632,911.529"/>
    <path fillOpacity="0.6" d="M806.917,911.137V654.866l221.833,128.127L806.917,911.137"/>
    <path fillOpacity="0.85" d="M808.699,1184.994V928.71l221.845,128.137L808.699,1184.994"/>
    <path fillOpacity="0.7" d="M1034.097,1321.577v-256.293L812.264,1193.43L1034.097,1321.577"/>
    <path fillOpacity="0.7" d="M1034.097,1048.311V792.02L812.264,920.165L1034.097,1048.311"/>
    <path fillOpacity="0.6" d="M808.699,1458.338v-256.272l221.845,128.126L808.699,1458.338"/>
    <path fillOpacity="0.6" d="M569.971,1048.311V792.02l221.834,128.156L569.971,1048.311"/>
    <path fillOpacity="0.5" d="M560.086,1048.311V792.02L338.262,920.176L560.086,1048.311"/>
    <path fillOpacity="0.5" d="M796.86,911.334V655.063L575.012,783.194L796.86,911.334"/>
    <path d="M1736.824,364.132V107.84l221.829,128.148L1736.824,364.132"/>
    <path d="M1973.771,500.708v-256.28l221.834,128.136L1973.771,500.708"/>
    <path fillOpacity="0.85" d="M1499.813,500.858V244.571l221.829,128.134L1499.813,500.858"/>
    <path fillOpacity="0.9" d="M1726.94,364.132V107.84l-221.825,128.148L1726.94,364.132"/>
    <path fillOpacity="0.7" d="M1263.59,910.949v-256.28l221.845,128.137L1263.59,910.949"/>
    <path fillOpacity="0.7" d="M1263.59,1184.806V928.523l221.845,128.137L1263.59,1184.806"/>
    <path fillOpacity="0.9" d="M1963.708,500.905V244.618L1741.87,372.762L1963.708,500.905"/>
    <path fillOpacity="0.6" d="M1490.476,500.905V244.618l-221.834,128.144L1490.476,500.905"/>
    <path fillOpacity="0.5" d="M1490.476,1047.533V791.25l-221.834,128.138L1490.476,1047.533"/>
    <path fillOpacity="0.7" d="M1263.59,637.208V380.916l221.845,128.142L1263.59,637.208"/>
    <path fillOpacity="0.5" d="M1490.476,773.783V517.495l-221.834,128.144L1490.476,773.783"/>
    <path fillOpacity="0.85" d="M1973.771,1047.632V791.349l221.834,128.138L1973.771,1047.632"/>
    <path fillOpacity="0.7" d="M2199.158,1184.216V927.922l-221.818,128.147L2199.158,1184.216"/>
    <path fillOpacity="0.7" d="M2199.158,910.949v-256.28L1977.34,782.811L2199.158,910.949"/>
    <path fillOpacity="0.85" d="M1973.771,773.886v-256.29l221.834,128.148L1973.771,773.886"/>
    <path fillOpacity="0.7" d="M2199.158,637.201V380.916L1977.34,509.058L2199.158,637.201"/>
    <path fillOpacity="0.7" d="M1499.813,1321.34v-256.281l221.829,128.146L1499.813,1321.34"/>
    <path fillOpacity="0.7" d="M1490.476,1321.38v-256.293l-221.834,128.146L1490.476,1321.38"/>
    <path fillOpacity="0.6" d="M1973.771,1320.986v-256.272l221.834,128.116L1973.771,1320.986"/>
    <path fillOpacity="0.6" d="M1736.824,1458.16v-256.292l221.829,128.146L1736.824,1458.16"/>
    <path fillOpacity="0.5" d="M1726.94,1458.16v-256.292l-221.825,128.146L1726.94,1458.16"/>
    <path fillOpacity="0.5" d="M1963.708,1321.183V1064.91l-221.838,128.126L1963.708,1321.183"/>
    <path d="M3138.832,363.94V107.66l221.844,128.139L3138.832,363.94"/>
    <path fillOpacity="0.7" d="M2428.662,501.107v-256.29l221.834,128.141L2428.662,501.107"/>
    <path fillOpacity="0.7" d="M2428.662,774.959V518.674l221.834,128.144L2428.662,774.959"/>
    <path fillOpacity="0.6" d="M2655.537,364.14V107.847l-221.824,128.141L2655.537,364.14"/>
    <path fillOpacity="0.5" d="M2655.537,637.688V381.403l-221.824,128.144L2655.537,637.688"/>
    <path fillOpacity="0.85" d="M3138.832,637.787V381.502l221.844,128.144L3138.832,637.787"/>
    <path fillOpacity="0.7" d="M3364.221,774.368V518.083l-221.819,128.148L3364.221,774.368"/>
    <path fillOpacity="0.7" d="M3364.221,501.107V244.822l-221.819,128.145L3364.221,501.107"/>
    <path fillOpacity="0.7" d="M2664.88,911.501V655.216l221.824,128.141L2664.88,911.501"/>
    <path fillOpacity="0.7" d="M2655.537,911.529V655.25l-221.824,128.136L2655.537,911.529"/>
    <path fillOpacity="0.6" d="M3138.832,911.137V654.866l221.844,128.127L3138.832,911.137"/>
    <path fillOpacity="0.85" d="M3140.614,1184.993V928.7l221.844,128.146L3140.614,1184.993"/>
    <path fillOpacity="0.7" d="M3366.003,1321.577v-256.293l-221.82,128.146L3366.003,1321.577"/>
    <path fillOpacity="0.7" d="M3366.003,1048.311V792.02l-221.82,128.146L3366.003,1048.311"/>
    <path fillOpacity="0.6" d="M3140.614,1458.338v-256.272l221.844,128.126L3140.614,1458.338"/>
    <path fillOpacity="0.6" d="M2901.886,1048.311V792.02l221.834,128.155L2901.886,1048.311"/>
    <path fillOpacity="0.5" d="M2892.002,1048.311V792.02l-221.825,128.155L2892.002,1048.311"/>
    <path fillOpacity="0.5" d="M3128.78,911.334V655.063l-221.849,128.131L3128.78,911.334"/>
  </svg>
      </div>
      <h1>404</h1>
      <p>Page non trouvée</p>
      <p>Il semble que la page que vous cherchez n'existe pas ou a été déplacée.</p>
      <Link to="/">Retourner à l'accueil</Link>

    </div>
  );
};

export default NotFound;

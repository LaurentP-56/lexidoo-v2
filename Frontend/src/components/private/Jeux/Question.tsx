import React from 'react';
// import styles from '../styles/Question.module.css';

const Question = ({ data, onAnswer }) => {
    return (
        <div>
            <h3>{data.question}</h3>
            {data.options.map((option, index) => (
                <button key={index} onClick={() => onAnswer(option)}>
                    {option.text}
                </button>
            ))}
        </div>
    );
};

export default Question;

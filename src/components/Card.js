// Card.js

import React from 'react';
import './Card.css';

const Card = ({ title, time, imageUrl }) => {
    return (
        <div className="card" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="card-content">
                <h2>{title}</h2>
                <p>Time: {time}</p>
            </div>
        </div>
    );
};

export default Card;

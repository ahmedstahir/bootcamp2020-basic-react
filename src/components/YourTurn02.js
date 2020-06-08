import React from 'react';
import '../styling.css';
import Gate from './Gate'

function YourTurn02({ title, body, imageUrl }) {
    return (
        <div className="TextCenter">
            <h4 className="TextUnderline">YOUR TURN # {3 - 1} (Media Card & Gate)</h4>
            <h2>{title}</h2>
            <p>{body}</p>
            <img src={imageUrl} alt="Media Card" className="MediaCard" />
            <Gate isOpen={true} />
        </div>
    );
}

export default YourTurn02;

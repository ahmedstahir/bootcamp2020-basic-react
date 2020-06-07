import React from 'react';
import myImage from '../download.jpg';
import '../styling.css';

function YourTurn01({ name }) {
    return (
        <div className="TextCenter">
            <h4 className="TextUnderline">YOUR TURN # {2 - 1}</h4>
            Hello from <strong>{name}</strong>!
          <br /><br />
            <img src={myImage} alt="Sample" />
            <br /><br />
            <span style={{ color: "blueviolet" }}>
                <strong>
                    Avoid tounching your mouth, eyes and nose.
                </strong>
            </span>
        </div>
    );
}

export default YourTurn01;

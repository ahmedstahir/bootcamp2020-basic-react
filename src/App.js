import React from 'react';
import First from './components/YourTurn01'
import './styling.css';

function App({ name }) {
    return (
        <div>
            <h2 className="TextCenter">Tutorial Practice Tasks</h2>
            <First name={name} />
        </div>
  );
}

export default App;

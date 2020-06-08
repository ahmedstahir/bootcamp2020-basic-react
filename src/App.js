import React from 'react';
import First from './components/YourTurn01'
import MediaCard from './components/YourTurn02'
import './styling.css';

function App({ name }) {
    return (
        <div>
            <h2 className="TextCenter">Tutorial Practice Tasks</h2>
            <First name={name} />
            <MediaCard title="Media Card" body={<div>Every time you reload the site, you will see a <i>different image</i> below</div>} imageUrl="https://source.unsplash.com/random" />
        </div>
  );
}

export default App;

import React from 'react';
import './styles.css'; // Import the CSS file
import {ArtistName, Categories, Personal, Socials} from './components';

function App() {
  return (
      <div className="container">
        <div className="text-column">
          <ArtistName/>
          <Categories/>
          <Personal/>
          <Socials/>
        </div>
        <div className="images-column">
          Collection of images.
        </div>
      </div>
  )
}

export default App;

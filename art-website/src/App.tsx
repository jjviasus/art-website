import React, { useEffect } from 'react';
import './styles.css'; // Import the CSS file
import { HomePage } from './components';
import { animateOnLoad } from './animation'; // Import the animation function

function App() {
  useEffect(() => {
    animateOnLoad(); // Call the animation function
  }, []);

  return <HomePage />;
}

export default App;

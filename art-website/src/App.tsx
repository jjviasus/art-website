import React, { useEffect } from 'react';
import './styles.css';
import { HomePage } from './components';
import { fadeInAnimation } from './components/animations/FadeInAnimation';

function App() {
  useEffect(() => {
    fadeInAnimation();
  }, []);

  return <HomePage />;
}

export default App;

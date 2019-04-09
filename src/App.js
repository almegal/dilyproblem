import React from 'react';
import Deck from './Component/Deck';
// import logo from './logo.svg';

const App = () => (
  <div
    style={{
      backgroundColor: 'rgb(175, 219, 228)',
      height: '100vh',
    }}
  >
    <div className="title-text">
      <h1>Some content</h1>
      <h2>Total problems #531</h2>
      <p>Swipe to skip!</p>
    </div>
    <Deck level="easy" delay={1}/>
    <Deck level="easy" delay={1.5}/>
    <Deck level="easy" delay={2}/>
  </div>
);

export default App;

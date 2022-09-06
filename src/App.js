import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

const development = process.env.REACT_APP_DEVELOPMENT === 'true';

function App() {
  return (
    <div className="App">
      { development && <h1>Em desenvolvimento</h1> }
      <StrangerThings />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import StrangerThings from './components/StrangerThings';

function App() {
  return (
    <div className="App">
      { (process.env.REACT_APP_IN_PRODUCTION === 'false')
        ? <div>Em desenvolvimento</div> : '' }
      <StrangerThings />
    </div>
  );
}

export default App;

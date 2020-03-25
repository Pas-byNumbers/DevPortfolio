import React from 'react';
import { Grommet } from 'grommet'
import './styles/App.css';
import { Flag } from 'grommet-icons';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
}

function App() {
  return (
    <Grommet theme={theme} >
      <div className="App">
      <header className="App-header">
       
      </header>
    </div>
    
    </Grommet>
    
  );
}

export default App;

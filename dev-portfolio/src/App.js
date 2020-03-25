import React from 'react';
import { Grommet } from 'grommet'
import './styles/App.css';
import { Flag } from 'grommet-icons';
import BodyBoxContainer from './containers/BodyBoxContainer';

const theme = {
  global: {
    font: {
      family: 'Righteous',
      size: '15px',
      height: '20px',
    },
  },
}

function App() {
  return (
    <Grommet theme={theme} >
      <div className="App">
      
      <BodyBoxContainer />
    </div>
    
    </Grommet>
    
  );
}

export default App;

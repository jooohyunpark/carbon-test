import React from 'react';
import './App.scss';
import { Button } from 'carbon-components-react';
import Progress from './progress/index';

function App() {
  return (
    <div className="App">
      <h4>Button</h4>
      <Button>Button </Button>

      <h4>Progress </h4>
      <Progress />
    </div>
  );
}

export default App;

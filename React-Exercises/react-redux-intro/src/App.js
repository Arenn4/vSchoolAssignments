import React, { Component } from 'react';
import Controls from './components/Controls'
import Display from './components/Display'



class App extends Component {
  render() {
    return (
      <div>
        <Display />
        <Controls />
      </div>
    );
  }
}

export default App;

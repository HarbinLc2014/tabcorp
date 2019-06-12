import React from 'react';

import Select from './Select';
import Display from './Display';
import Draw from './Draw';

 class App extends React.Component {
  render(){
    return (
      <div className="App">
      <Select />
      <Display />
      <Draw />
      </div>
    );
  }
}

export default App;

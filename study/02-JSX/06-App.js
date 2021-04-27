import React from 'react';
import BooleanComponent from './component/BooleanComponent';

class App extends React.Component {
  render() {
    return (
      <div>
        <div><b>지루할 때 : </b><BooleanComponent bored /></div>
        <div><b>즐거울 때 : </b><BooleanComponent /></div>
      </div>
    )
  }
}

export default App;

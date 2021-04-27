import React from 'react';
import ChildComponent2 from './component/ChildComponent2';

class App extends React.Component {
  render() {
    return (
      <div>
        <ChildComponent2
        objValue={{age : '20살'}}
        />
      </div>
    )
  }
}

export default App;

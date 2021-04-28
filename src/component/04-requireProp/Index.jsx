import React from 'react';
import ChildComponent2 from './ChildComponent2';

class Index extends React.Component {
  render() {
    return (
      <div>
        <ChildComponent2
        objValue={{age : 20}}
        requiredStringValue='문자'
        />
      </div>
    )
  }
}

export default Index;

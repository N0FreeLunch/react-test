import React from 'react';

class MyPureComponent extends React.PureComponent {
  componentDidUpdate() {
    console.log('My pure component 새로고침');
  }
  render() {
    return (<div></div>);
  }
}
export default MyPureComponent;

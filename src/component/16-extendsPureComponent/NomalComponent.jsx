import React from 'react';

class MyComponent extends React.Component {
  componentDidUpdate() {
    console.log('My component 새로고침');
  }
  render() {
    return (<div></div>);
  }
}
export default MyComponent;

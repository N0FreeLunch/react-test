import React from 'react';


class LifecycleForceUpdate extends React.Component {
  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps 호출')
    return {};
  }

  constructor(props) {
    super(props);
    this.state = {};
    console.log('constructor 호출');
  }

  componentDidMount() {
    console.log('componentDidMount 호출');
    setTimeout(() => {
      this.forceUpdate();
    }, 1000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate 호출')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount 호출')
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate 호출');
    return false;
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate 호출');
    return {};
  }

  render() {
    console.log('render 호출');
    return null;
  }

}


export default LifecycleForceUpdate;

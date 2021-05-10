import React from 'react';
import LifecycleDestroyComponent from './LifecycleDestroyComponent';

class Index extends React.Component {
  constructor (props) {
    super(props);
    this.state = {hasDestroyed : false};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({hasDestroyed : true});
    }, 1000);
  }
  render() {
    return (
      <div>
        {this.state.hasDestroyed ? null : <LifecycleDestroyComponent />}
      </div>
    )
  }
}

export default Index;

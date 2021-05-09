import React from 'react';
import LifecycleDestroyComponent from './LifecycleDestroyComponent';

class Index extends React.Component {
  constructor (props) {
    super(props);
    this.state = {hasDestroyed : false};
  }
  componentDidMount() {
    this.setState({hasDestroyed : true});
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

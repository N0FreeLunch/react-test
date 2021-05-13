import React from 'react';
import shallowCompare from 'react-addons-shallow-compare'; // ES6

class PureComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !shallowCompare(this.props, nextProps) ||
      !shallowCompare(this.state, nextState)
  }

  componentDidMount() {
    const obj = {name : 'park'};
    const mylist = [1, 2, 3, obj];
    const list1 = [1, 2, 3, obj];
    const list2 = [1, 2, 3, {name : 'park'}];
    console.log("---------------PureComponent-start---------------");
    console.log("deep compare : ", mylist === list1);
    console.log("shallow compare : ", shallowCompare(mylist, list1));
    console.log("shallow compare : ", shallowCompare(list1, list2));
    console.log("---------------PureComponent-end---------------");
  }

  render () {
    return (
      <div>
      </div>
    )
  }
}

export default PureComponent;

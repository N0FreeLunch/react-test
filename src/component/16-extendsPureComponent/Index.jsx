import React from 'react';
import MyComponent from './NomalComponent';
import MyPureComponent from './PureComponent';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.listValue = [{name : 'Park'}, {name : 'Lee' }];
    this.state = {version : 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    const myComponentUpdate = (() => {
      setTimeout(() => {
        this.listValue[0].name = 'Justin';
        // this.listValue = [{name : 'Justin'}];
        this.setState({version : 1});
      }, 100);
    })();
    const myComponentPureComponentUpdate = (() => {
      setTimeout(() => {
        this.listValue = [{name : 'Justin'}, {name : 'Lee'}];
        this.setState({version : 2});
      }, 200);
    })();
  }

  render() {
    return (
      <div className="body">
        <MyComponent value={this.listValue} />
        <MyPureComponent value={this.listValue} />
        <button onClick={this.handleClick}>버튼</button>
      </div>
    )
  }
}

export default Index;

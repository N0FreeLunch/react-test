import React from 'react';

class StateExample extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loading : true,
      formData : 'no data',
    };

    this.handleData = this.handleData.bind(this);
    // setTimeout(this.handleData, 4000);
    setTimeout(this.handleData, 4000);
  }

  handleData () {
    const data = 'new data';
    const {formData} = this.state;
    console.log("formData", formData);

    // this.setState({
    //   loading : false,
    //   formData : data + formData,
    // });

    this.setState(function(prevState) {
      const newState = {
        loading : false,
        formData : data + "(" + prevState.formData + ")",
      }
      return newState;
    })

    console.log('loading값', this.state.loading);
  }

  render () {
    return (
      <div>
        <span>로딩중 : {String(this.state.loading)}</span>
        <span>결과 : {this.state.formData}</span>
      </div>
    )
  }
}

export default StateExample;

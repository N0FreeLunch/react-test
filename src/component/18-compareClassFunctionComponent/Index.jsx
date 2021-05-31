import React from 'react';
import SFCTodaysPlanApp from './SFCTodaysPlanApp';
import TodaysPlanApp from './TodaysPlanApp';

class Index extends React.Component {
  constructor() {
    super()
    this.state = {
      isExistSFCPlan : false,
      isExistPlan : false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSFCClick = this.handleSFCClick.bind(this);
  }

  handleSFCClick () {
    this.setState(({isExistSFCPlan}) => ({
      isExistSFCPlan : !isExistSFCPlan,
    }));
  }

  handleClick () {
    this.setState(({isExistPlan}) => ({
      isExistPlan : !isExistPlan,
    }));
  }


  render () {
    return (
      <div>
      <SFCTodaysPlanApp onButtonClick={this.handleSFCClick} hasPlan={this.state.isExistSFCPlan}></SFCTodaysPlanApp>
      <TodaysPlanApp onButtonClick={this.handleClick} hasPlan={this.state.isExistPlan}></TodaysPlanApp>
      </div>
    )
  }
}

export default Index;

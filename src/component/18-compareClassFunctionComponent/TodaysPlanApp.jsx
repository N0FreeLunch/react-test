import React from 'react';
import TodaysPlan from './TodaysPlan';

class TodayPlanApp extends React.Component {
  render() {
    const {onButtonClick, hasPlan} = this.props;
    return (
      <div className="body">
        {hasPlan ? <TodaysPlan message="TodayPlanApp" /> : null}
        <button onClick={onButtonClick}>
          계획없음
        </button>
      </div>
    );
  }
}


export default TodayPlanApp;

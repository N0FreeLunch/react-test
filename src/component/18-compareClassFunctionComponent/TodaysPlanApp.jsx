import React from 'react';
import TodaysPlan from './TodaysPlan';

class TodayPlanApp extends React.Component {
  render() {
    const {onButtonClick, hasPlan} = this.props;
    return (
      <div className="body">
        {hasPlan ? <TodaysPlan message="TodayPlanApp" /> : null}
        <button onClick={onButtonClick}>
          ęłíěě
        </button>
      </div>
    );
  }
}


export default TodayPlanApp;

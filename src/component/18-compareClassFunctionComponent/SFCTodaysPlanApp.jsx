import TodaysPlan from './TodaysPlan';

function TodaysPlanApp(props) {
  const {onButtonClick, hasPlan} = props;
  return (
    <div className="body">
      {hasPlan ? <TodaysPlan message="SFCTodaysPlanApp"/> : null}
      <button onClick={onButtonClick}>
        ęłíěě
      </button>
    </div>
  );
}


export default TodaysPlanApp;

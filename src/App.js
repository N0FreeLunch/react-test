import React from 'react';
import Component01 from './component/01-PropTypesKind/Index';
import Component02 from './component/02-differentDisplayByProps/Index';
import Component03 from './component/03-objectMethodType/Index';
import Component04 from './component/04-requireProp/Index';

class App extends React.Component {
  render() {
    const componentArray = [];
    componentArray.push(<Component01/>);
    componentArray.push(<Component02/>);
    componentArray.push(<Component03/>);
    componentArray.push(<Component04/>);
    return (
      <div>
        {componentArray.map((e,i) => {
          return (
            <div key={i}>
            <h2>{i}</h2>
            {e}
            <hr/>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;

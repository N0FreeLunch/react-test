import React from 'react';
import Component01 from './component/01-PropTypesKind/Index';
import Component02 from './component/02-differentDisplayByProps/Index';
import Component03 from './component/03-objectMethodType/Index';
import Component04 from './component/04-requireProp/Index';
import Component05 from './component/05-defaultProp/Index';
import Component06 from './component/06-transmitJsxToChildComponent/Index';
import Component07 from './component/07-state/Index';
import Component08 from './component/08-renderingWithoutState/Index';
import Component09 from './component/09-counter/Index';
import Component10 from './component/10-lifecycleStateUpdate/Index';
import Component11 from './component/11-shouldComponentUpdate/Index';
import Component12 from './component/12-lifecycleForceUpdate/Index';
import Component13 from './component/13-lifecycleDestroyComponent/Index';
import Component14 from './component/14-getDerivedStateFromProps/Index';

class App extends React.Component {
  render() {
    const componentArray = [];
    componentArray.push(<Component01/>);
    componentArray.push(<Component02/>);
    componentArray.push(<Component03/>);
    componentArray.push(<Component04/>);
    componentArray.push(<Component05/>);
    componentArray.push(<Component06/>);
    componentArray.push(<Component07/>); // warning
    componentArray.push(<Component08/>); // warning
    componentArray.push(<Component09/>);
    // componentArray.push(<Component10/>);
    // componentArray.push(<Component11/>);
    // componentArray.push(<Component12/>);
    componentArray.push(<Component13/>);
    componentArray.push(<Component14/>);

    return (
      <div>
        {componentArray.map((e,i) => {
          return (
            <div key={i}>
            <h2>{i+1}</h2>
            {e}
            <hr/>
            </div>
          )
        }).reverse()}
      </div>
    );
  }
}

export default App;

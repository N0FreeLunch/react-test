import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

// 현재 버전의 리액트에는 serviceWorker가 존재하지 않는다. 
// 커스텀으로 추가함
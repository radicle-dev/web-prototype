import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import Router from './Components/Router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Index from './componentes/IndexPage/LoginAndRegister'
import World from './componentes/World/containerWorld'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

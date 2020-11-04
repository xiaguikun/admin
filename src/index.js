import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter.jsx'
import store from './store/index.js';
import {Provider} from 'react-redux';

import './App.less';

ReactDOM.render(
  <Provider store={store}>    
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);

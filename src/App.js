import React from 'react';

// import {Home} from './home/index.js';

import './App.less';

const App = (props) => (
  <div className="App">
      {props.children}
  </div>
);

export default App;
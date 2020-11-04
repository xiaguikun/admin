import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer.js';
import mySaga from './sagas.js';

const sagaMiddleware=createSagaMiddleware();

const store = createStore(reducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

export default store;
import { createStore,applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import React from 'react';
import { createLogger } from 'redux-logger';

import DevTools from '../DevTools';

import reducers, { initialState } from '../reducers';

let enhancer = applyMiddleware(thunk);
if(process.env.NODE_ENV==='development'){
  enhancer = compose(
       applyMiddleware(thunk, createLogger()),
       DevTools.instrument()
  )
}

let store = createStore(
  reducers,
  initialState,
  enhancer
);

if(process.env.NODE_ENV === 'development'){
  if(moudle.hot){
    moudle.hot.accept('.reducers',()=>{
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer)
    })
  }
}

export default store;

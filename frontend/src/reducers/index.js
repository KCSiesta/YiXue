/*
 * 该Reducer为根reducer, 用于结合App中所有的reducer.
 * 由于Redux中必须只有一个store和一个reducer ,
 * 因此使用 combineReducers 来把多个reducer组合在一起
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

/* 这里是我们自定义的各种reducer */
import appReducer from './app-reducer'; // 这个稍后创建
import commonReducer from './common';
import courseReducer from './course';
import courseListReducer from './courseList';

/* 利用官方提供的combineReducers将所有reducer组合成一个 */
const RootReducer = combineReducers({
  // 注意一定要加上routing: routerReducer 这是用于redux和react-router的连接
  routerReducer,
  // 其他的reducers
  commonReducer,
  courseReducer,
  courseListReducer,
  appReducer // 这里的命名，关系到container中取state对应的reducer的名字
});

export default RootReducer;

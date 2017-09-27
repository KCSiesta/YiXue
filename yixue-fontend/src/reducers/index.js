import { combineReducers } from 'redux';
import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions'

export let initialState = {
  entities: {
    loginUser: null
  },
  loginPageData: {
    lading: false,
    error: null
  }
};

let reducers = combineReducers({
  //存放登陆成功后获取到用户的信息
  entities: function(state = {}, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
        return{...state,loginUser: action.payload};
      default:
        return state;
    }
  },
  //模拟登陆动作，登陆页面用到的数据存放在这
  loginPageData: function(state={}, action){
    switch (action.type) {
      case LOGIN_LOADING:
          return{...state, loading: action.payload};
      case LOGIN_FAILURE:
          return{...state, error: action.payload};
      case LOGIN_SUCCESS:
          return{...state, error: null};
      default:
          return state;
    }
  }
});

export default reducers;

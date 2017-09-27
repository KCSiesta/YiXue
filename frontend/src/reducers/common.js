import { combineReducers } from 'redux';
import { LOADING_STATUS } from '../constants/actionTypes';

export function loading(state = false, action){
  switch(action.type) {
    case LOADING_STATUS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({
  loading: loading
});

export const getState = (state) => {
  return state.commonReducer;
};

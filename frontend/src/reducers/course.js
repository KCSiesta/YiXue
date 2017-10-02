import { combineReducers } from 'redux';
import { FETCH_COURSE } from '../constants/actionTypes';

export const fetchData = (state = {}, action) => {
  switch (action.type) {
    case FETCH_COURSE.SUCCESS: {
      return action.payload;
      //console.log([...action.payload]);
    }
    default:{
      return state;
    }
  }
};

export default combineReducers({
  fetchData
});

//selector用户获取当前的state
export const getState = (state) => {
  return state.courseReducer;
};

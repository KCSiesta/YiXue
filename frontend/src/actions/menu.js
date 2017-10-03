import { createAction } from 'redux-actions';
import { CLICK_MENU } from '../constants/actionTypes';
import { loadingStatus } from './common';
import * as API from '../constants/API';

const fetchSuccess = createAction(CLICK_MENU.SUCCESS);

export const fetchData = (name) => (dispatch) => {
    dispatch(loadingStatus(true));
    return fetch(`${API.FETCH_COURSE_BY_MENU}?id=${name}`)
    .then((response) => {
      dispatch(loadingStatus(false));
      return response;
    })
    .then((response) => response.json())//把response转换成json
    .then(data => {//上面的转好的json
      dispatch(fetchSuccess(data));
      //console.log();
    })
    .catch();
};

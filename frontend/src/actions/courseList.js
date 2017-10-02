import * as API from '../constants/API';
import { createAction } from 'redux-actions';
import { FETCH_COURSE_LIST } from '../constants/actionTypes';
import { loadingStatus } from './common';

const fetchSuccess = createAction(FETCH_COURSE_LIST.SUCCESS);

export function fetchData(type = API.COURSE_TYPE_FRONT.HTML) {
    return (dispatch) => {
        // api 请求前
        dispatch(loadingStatus(true));

        fetch(`${API.FETCH_COURSE_LIST}?typeId=${type}`,
          /*{
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
             }
           })//.then(function(response){console.log(response.status);})
           .then(function (response) {
              if (response.ok) {
                  response.json().then(function (data) {
                    console.log(data);
                    dispatch(loadingStatus(true));
                    return response;
                  }).then(items => { dispatch(fetchSuccess(items));} );
              } else {
                console.log('请求失败，状态码为', response.status);
              }
              }, function(err) {
                console.log('出错：', err);
           });*/
         ).then(response => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }
              dispatch(loadingStatus(false));
              return response;
              })
              .then(response => response.json())
              .then(items => {
                  dispatch(fetchSuccess(items));
                  //console.log(dispatch(fetchSuccess(items)));
                  //setState({items})
              })
              .catch();
    };
}

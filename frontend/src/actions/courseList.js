import * as API from '../constants/API'
import { createAction } from 'redux-actions'
import { FETCH_COURSE_LIST } from '../constants/actionTypes'
import { loadingStatus } from './common'

const fetchSuccess = createAction(FETCH_COURSE_LIST.SUCCESS);

export function fetchData(type = API.COURSE_TYPE.FRONT_DEV) {
    return (dispatch) => {
        // api 请求前
        dispatch(loadingStatus(true));

        fetch(`${API.FETCH_COURSE_LIST}?typeId=10`)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(loadingStatus(false))
                return response;
            })
            .then(response => response.json())
            .then(items => {
                dispatch(fetchSuccess(items))
            })
            .catch()
    }
}

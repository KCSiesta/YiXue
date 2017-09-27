import { LOADING_STATUS } from '../constants/actionTypes';
import { createAction } from 'redux-actions';

export const loadingStatus = createAction(LOADING_STATUS);

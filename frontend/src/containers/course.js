import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CourseView from '../components/Course/CourseView';
import * as actionCreators from '../actions/course';
import * as selector from '../reducers/course';

const mapStatetoProps = (state) => {
  return{
    data: selector.getState(state).fetchData,
    loading: state.commonReducer.loading
  };
};

const mapDispatchtoProps = (dispatch) => {
  const actions = bindActionCreators(actionCreators, dispatch);
  return {
    fetchData: actions.fetchData,
  };
};
    //console.log(fetchData);
export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(CourseView);

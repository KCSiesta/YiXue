import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CourseListView from '../components/Course/CourseListView';
import * as actionCreators from '../actions/courseList';
import * as selector from '../reducers/courseList';

const mapStatetoProps = (state) => {
  return{
    items: selector.getState(state).items,
    loading: state.commonReducer.loading,
  };
};

const mapDispatchtoProps = (dispatch) => {
  const actions = bindActionCreators(actionCreators, dispatch);
  return {
    fetchData: actions.fetchData,
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(CourseListView);

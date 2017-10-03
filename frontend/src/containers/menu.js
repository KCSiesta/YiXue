import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Sidebar from '../components/sidebar';
import * as actionCreators from '../actions/menu';
import * as selector from '../reducers/menu';

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
)(Sidebar);

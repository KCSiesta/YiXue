/* 主页 */

// ==================
// 所需的各种插件
// ==================

import React from 'react';
import { connect } from 'react-redux';
import { Link, hashHistory, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import {PropTypes} from 'prop-types';
// ==================
// 所需的所有组件
// ==================

import ImgLogo from '../../assets/logo.png';
import SearchBar from '../../components/search';
import { Layout,Menu } from 'antd';
const { Header,Content,Footer } = Layout;
import Imgbox from'../../components/carousel';
import Sidebar from '../../components/sidebar';
//import Recomoudle from '../../components/card';
import CourseListView from '../courseList';
//import CourseListView from '../../components/Course/CourseListView';
// ==================
// 本页面所需action
// ==================

//import fetchData from '../../actions/courseList';

// ==================
// Definition
// ==================

export default class HomePageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  /*getChildContext() {
    return{
      loading: this.props.loading,
      items: this.props.items,
      fetchData: this.props.fetchData
    };
  }*/
  render() {
    return (
      <Layout className="layout">
          <Header>
             <div className='logo' onClick={() => browserHistory.push('/')}>
                 <img className='logo-pic' src={ ImgLogo } alt='head-pic'/ >
             </div>
             <Menu
               className='nav-item'
               theme='dark'
               onClick={this.handleClick}
               selectedKeys={[this.state.current]}
               mode='horizontal'
               //style={{fontSize: '16px',lineHeight: '64px'}}
               >
               <Menu.Item key='index'>
                   <Link to='/home'>首页</Link>
               </Menu.Item>
               <Menu.Item key='course'>
                   <Link to='/course'>课程</Link>
               </Menu.Item>
              </Menu>
              <div className='search'>
                   <SearchBar />
              </div>
          </Header>
          <Content className='content'>
             <div className='gallery'>
                 <div className='sidebar'><Sidebar /></div>
                 <div className='carousel'><Imgbox /></div>
             </div>
             <CourseListView />
          </Content>
          <Footer className='footer'>
             Ant Design ©2016 Created by Ant UED
          </Footer>
      </Layout>
     );
  }
}

// ==================
// PropTypes
// ==================
/*CourseListView.propTypes = {
  loading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  fetchData: PropTypes.func.isRequired
};*/
HomePageContainer.propTypes = {
  location: PropTypes.any,
  history: PropTypes.any,
  children: PropTypes.any
};

// ==================
// Export
// ==================

(state) => (({
    testvalue: state.appReducer.inputvalue,
    fetchValue: state.appReducer.fetchvalue,
  }),
  (dispatch) => ({
    actions: bindActionCreators({}, dispatch),
  })
)(HomePageContainer);

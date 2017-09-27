/* 主页 */

// ==================
// 所需的各种插件
// ==================

import React from 'react';
import { connect } from 'react-redux';
import { Link, hashHistory, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import P from 'prop-types';

// ==================
// 所需的所有组件
// ==================

import ImgLogo from '../../assets/logo.png';
import SearchBar from '../../components/search';
import { Layout,Menu } from 'antd';
const { Header,Content,Footer } = Layout;
import CourseView from '../../components/Course/CourseView';
// ==================
// 本页面所需action
// ==================

//import appAction from '../../a_action/app-action';

// ==================
// Definition
// ==================

class CoursePageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
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
          <Content clssName='content'>
             <CourseView />
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

CoursePageContainer.propTypes = {
  location: P.any,
  history: P.any,
};

// ==================
// Export
// ==================

export default connect(
  (state) => ({
    testvalue: state.app.inputvalue,
    fetchValue: state.app.fetchvalue,
  }),
  (dispatch) => ({
    actions: bindActionCreators({}, dispatch),
  })
)(CoursePageContainer);

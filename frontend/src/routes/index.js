import React from 'react'; // react核心
import { Router,Route, Redirect, IndexRedirect,hashHistory } from 'react-router'; // 创建route所需

/* 下面是引入一些我们自己定义的container,作为路由的页面 */
// root这个container很重要 我们稍后配置
import RootContainer from '../containers/root';
import TestContainer from '../containers/home'; // 一个主页的container
import TestContainer2 from '../containers/course';

import courseList from '../containers/courseList';
import sidebar from '../containers/menu';
export default (
  <Route path="/" component={RootContainer}> // 所有的访问，都跳转到rootContainer
    //<IndexRedirect to="/home" /> // 默认加载的组件，比如访问www.test.com,会自动跳转到www.test.com/home
    <IndexRedirect to="/home"  component={TestContainer}/>
    <Route path="/home" component={TestContainer} /> // 一个路由地址，访问www.test.com/home,就会跳转到此
    <Route path="/course" component={TestContainer2} />
    <Route path="/course/:id" component={TestContainer2} />//模块课程的路由地址，比如点击HTML进阶课程，就会跳转到对应课程
    <Route path="/menu/:name" component={sidebar} />//模块课程的路由地址，比如点击HTML进阶课程，就会跳转到对应课程

    /*菜单栏中的路由管理，监听URL中#部分变化而跳转到对应的课程
    <Router history={hashHistory}>
        <Route path="/HTML" component={TestContainer2} />
    </Router>*/
    <Redirect from='*' to='/'  /> // 所有的其他未定义的访问路径，都跳转到根路径，比如访问www.test.com/abc, 但是/abc我们没有定义，就会自动跳转到www.test.com, 而www.test.com又会自动跳转到www.test.com/home
  </Route>
);

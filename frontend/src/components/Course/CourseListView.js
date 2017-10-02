import React,{ Component,PropTypes } from 'react';
import { Link, hashHistory} from 'react-router';
import {
    Tabs,
    Tab,
} from 'antd';
const TabPane = Tabs.TabPane;
import { Card, Col, Row } from 'antd';
import ListItem from './ListItem';
import Loading from '../loading';
import {COURSE_TYPE_FRONT} from '../../constants/API';
//import fetchData  from '../../actions/courseList';

class CourseListView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      key: COURSE_TYPE_FRONT.HTML,
      items: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {
    this.fetchData(this.state.type);
  }
  fetchData(type) {
    const { fetchData } = this.props;
    fetchData(type);
  }
  componentWillReceiveProps(nextProps){
    if(this.props.items != nextProps.items) {
      this.setState( { items: nextProps.items });
    }
  }
  handleChange(key){
      //let self = this;
      this.setState({items:[],key});
      this.fetchData(key);
  }
  render() {
    const { loading } = this.props;
    const { items } = this.state;
    return(
     <div>
      <div className='recom-moudle'>
           <h2>前端开发</h2>
             <div>
               <Tabs activeKey={this.state.key} onChange={this.handleChange}>
                  <TabPane tab ='HTML'  key={COURSE_TYPE_FRONT.HTML}><ListItem items={items}/></TabPane>
                  <TabPane tab ='CSS'  key={COURSE_TYPE_FRONT.CSS}><ListItem items={items}/></TabPane>
                  <TabPane tab ='JS'  key={COURSE_TYPE_FRONT.JS}><ListItem items={items}/></TabPane>
                  <TabPane tab ='React' key={COURSE_TYPE_FRONT.REACT}><ListItem items={items}/></TabPane>
               </Tabs>
             </div>
           <Link to='/course' className='more'>更多</Link>
      </div>
      <div className='recom-moudle'>
           <h2>后端开发</h2>
             <div>
               <Tabs activeKey={this.state.key} onChange={this.handleChange}>
                  <TabPane tab ='HTML'  key={COURSE_TYPE_FRONT.HTML}><ListItem items={items}/></TabPane>
                  <TabPane tab ='CSS'  key={COURSE_TYPE_FRONT.CSS}><ListItem items={items}/></TabPane>
                  <TabPane tab ='JS'  key={COURSE_TYPE_FRONT.JS}><ListItem items={items}/></TabPane>
                  <TabPane tab ='React' key={COURSE_TYPE_FRONT.REACT}><ListItem items={items}/></TabPane>
               </Tabs>
             </div>
           <Link to='/course' className='more'>更多</Link>
      </div>
      <div className='recom-moudle'>
           <h2>UI设计</h2>
             <div>
               <Tabs activeKey={this.state.key} onChange={this.handleChange}>
                  <TabPane tab ='HTML'  key={COURSE_TYPE_FRONT.HTML}><ListItem items={items}/></TabPane>
                  <TabPane tab ='CSS'  key={COURSE_TYPE_FRONT.CSS}><ListItem items={items}/></TabPane>
                  <TabPane tab ='JS'  key={COURSE_TYPE_FRONT.JS}><ListItem items={items}/></TabPane>
                  <TabPane tab ='React' key={COURSE_TYPE_FRONT.REACT}><ListItem items={items}/></TabPane>
               </Tabs>
             </div>
           <Link to='/course' className='more'>更多</Link>
      </div>
      <div className='recom-moudle'>
           <h2>游戏开发</h2>
             <div>
               <Tabs activeKey={this.state.key} onChange={this.handleChange}>
                  <TabPane tab ='HTML'  key={COURSE_TYPE_FRONT.HTML}><ListItem items={items}/></TabPane>
                  <TabPane tab ='CSS'  key={COURSE_TYPE_FRONT.CSS}><ListItem items={items}/></TabPane>
                  <TabPane tab ='JS'  key={COURSE_TYPE_FRONT.JS}><ListItem items={items}/></TabPane>
                  <TabPane tab ='React' key={COURSE_TYPE_FRONT.REACT}><ListItem items={items}/></TabPane>
               </Tabs>
             </div>
           <Link to='/course' className='more'>更多</Link>
      </div>
    </div>
    );
  }
}

CourseListView.propTypes = {
  loading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  fetchData: PropTypes.func.isRequired
};

export default CourseListView;

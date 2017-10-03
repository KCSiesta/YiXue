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
import {COURSE_TYPE_FRONT,COURSE_TYPE_BACK,COURSE_TYPE_UI,COURSE_TYPE_GAME} from '../../constants/API';
//import fetchData  from '../../actions/courseList';

/*const arr= [
  {
    title:'前端开发',
    tabs:['HTML','CSS','JavaScript','React'],
    keys:['COURSE_TYPE_FRONT.HTML','COURSE_TYPE_FRONT.CSS','COURSE_TYPE_FRONT.JS','COURSE_TYPE_FRONT.AS']
  },
  {
    title:'后端开发',
    tabs:['Java','Python','PHP','C++'],
    keys:['COURSE_TYPE_BACK.JAVA','COURSE_TYPE_BACK.PYTHON','COURSE_TYPE_BACK.PHP','COURSE_TYPE_BACK.C']
  },
  {
    title:'UI设计',
    tabs:['Axure','CoreIDRAW','Photoshop','Illustrator'],
    keys:['COURSE_TYPE_UI.AXURE','COURSE_TYPE_UI.COREIDRAW','COURSE_TYPE_UI.PHOTOSHOP','COURSE_TYPE_UI.ILLUSTRATOR']
  },
  {
    title:'游戏开发',
    tabs:['手机游戏','网页游戏','单机游戏','小游戏'],
    keys:['COURSE_TYPE_GAME.PHONE','COURSE_TYPE_GAME.PC','COURSE_TYPE_GAME.STAND','COURSE_TYPE_GAME.MINI']
  },
];*/
class CourseListView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      key: 'COURSE_TYPE_FRONT.HTML',
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
                  <TabPane tab ='AS' key={COURSE_TYPE_FRONT.AS}><ListItem items={items}/></TabPane>
               </Tabs>
             </div>
           <Link to='/course' className='more'>更多</Link>
      </div>
      <div className='recom-moudle'>
           <h2>后端开发</h2>
             <div>
               <Tabs activeKey={this.state.key} onChange={this.handleChange}>
                  <TabPane tab ='Java'  key={COURSE_TYPE_BACK.JAVA}><ListItem items={items}/></TabPane>
                  <TabPane tab ='Python'  key={COURSE_TYPE_BACK.PYTHON}><ListItem items={items}/></TabPane>
                  <TabPane tab ='PHP'  key={COURSE_TYPE_BACK.PHP}><ListItem items={items}/></TabPane>
                  <TabPane tab ='C++' key={COURSE_TYPE_BACK.C}><ListItem items={items}/></TabPane>
               </Tabs>
             </div>
           <Link to='/course' className='more'>更多</Link>
      </div>
      <div className='recom-moudle'>
           <h2>UI设计</h2>
             <div>
               <Tabs activeKey={this.state.key} onChange={this.handleChange}>
                  <TabPane tab ='Axure'  key={COURSE_TYPE_UI.AXURE}><ListItem items={items}/></TabPane>
                  <TabPane tab ='CoreIDRAW'  key={COURSE_TYPE_UI.COREIDRAW}><ListItem items={items}/></TabPane>
                  <TabPane tab ='Photoshop'  key={COURSE_TYPE_UI.PHOTOSHOP}><ListItem items={items}/></TabPane>
                  <TabPane tab ='Illustrator' key={COURSE_TYPE_UI.ILLUSTRATOR}><ListItem items={items}/></TabPane>
               </Tabs>
             </div>
           <Link to='/course' className='more'>更多</Link>
      </div>
      <div className='recom-moudle'>
           <h2>游戏开发</h2>
             <div>
               <Tabs activeKey={this.state.key} onChange={this.handleChange}>
                  <TabPane tab ='手机游戏'  key={COURSE_TYPE_GAME.PHONE}><ListItem items={items}/></TabPane>
                  <TabPane tab ='网页游戏'  key={COURSE_TYPE_GAME.PC}><ListItem items={items}/></TabPane>
                  <TabPane tab ='单机游戏'  key={COURSE_TYPE_GAME.STAND}><ListItem items={items}/></TabPane>
                  <TabPane tab ='小游戏'   key={COURSE_TYPE_GAME.MINI}><ListItem items={items}/></TabPane>
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

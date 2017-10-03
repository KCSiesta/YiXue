import React, { Component} from 'react';
import {PropTypes} from 'prop-types';
import Loading from '../loading';
import { Link, hashHistory } from 'react-router';
import { InputNumber } from 'antd';
//import  fetchData  from '../../actions/course';


class CourseView extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data: {}
    };
  }
  /*componentDidMount(){
    this.props.fetchData('http://119.23.79.230:8080/study/user/getCourseByType?typeId=10');
  }*/
  /*CoueseView组件可以通过params.id访问实际的参数值，params.id 等于<Route path='course/:id'>中的路由参数，
  并通过props传给了页面组件，这样方便访问路由相关的数据*/
  componentWillMount(){
    const { fetchData, params } = this.props;
    fetchData(params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      const data = { ...nextProps.data };
      this.setState({data});
      //console.log({data});
    }
  }
  onChange(e){

  };
  renderCourseSubject(){
      const {data} = this.state;
      //console.log(data);
    if(typeof data[0] !== 'undefined'){
    return(
       <div className='course-view'>
       <div className='left-image'>
         <img alt='example' width='100%' src={data[0].url} />
       </div>
       <div className='right-title'>

         <h2>课程:<span className='course'>{data[0].name}</span></h2>
          <h2>价格:<span className='price'>{data[0].price}</span></h2>
          <h2>购买数量:<InputNumber min={1} max={10} defaultValue={1} onChange={()=>this.onChange()} /></h2>
          <Link to='/course' className='buy-it'>立即购买</Link>
          <Link to='/course' className='add-it'>加入购物车</Link>
       </div>
       <article className='course-desc'>
           <h2>课程简介</h2>
           <hr/>
           <p>{data[0].description}Irwan secretly leaves his motorcycle gang every night to watch Xing,
           a beautiful stage performer from China. He offers his heart andata dataeclares
            he will never leave her. Meanwhile, being trappedata, lonely andata unable to
             assimilate into Malaysian society, Xing stays with Irwan out of companionship
           rather than love.Irwan secretly leaves his motorcycle gang every night to watch Xing,
           a beautiful stage performer from China. He offers his heart andata dataeclares
            he will never leave her. Meanwhile, being trappedata, lonely andata unable to
             assimilate into Malaysian society, Xing stays with Irwan out of companionship
           rather than love.Irwan secretly leaves his motorcycle gang every night to watch Xing,
           a beautiful stage performer from China. He offers his heart andata dataeclares
            he will never leave her. Meanwhile, being trappedata, lonely andata unable to
             assimilate into Malaysian society, Xing stays with Irwan out of companionship
           rather than love.Irwan secretly leaves his motorcycle gang every night to watch Xing,
           a beautiful stage performer from China. He offers his heart andata dataeclares
            he will never leave her. Meanwhile, being trappedata, lonely andata unable to
             assimilate into Malaysian society, Xing stays with Irwan out of companionship
           rather than love.Irwan secretly leaves his motorcycle gang every night to watch Xing,
           a beautiful stage performer from China. He offers his heart andata dataeclares
            he will never leave her. Meanwhile, being trappedata, lonely andata unable to
             assimilate into Malaysian society, Xing stays with Irwan out of companionship
           rather than love.Irwan secretly leaves his motorcycle gang every night to watch Xing,
           a beautiful stage performer from China. He offers his heart andata dataeclares
            he will never leave her. Meanwhile, being trappedata, lonely andata unable to
             assimilate into Malaysian society, Xing stays with Irwan out of companionship
           rather than love.
           </p>
       </article>
      </div>
               );
     }
  }

  render(){
    const { loading } = this.props;
    const {data }= this.state;
    //console.log({data});
    return(
      <div>
         <Loading show={loading} />
         { this.renderCourseSubject()}
      </div>
    );
  }
}

CourseView.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.object
    ]),
  fetchData: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired
};
export default CourseView;

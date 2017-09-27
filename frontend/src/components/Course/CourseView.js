import React, { Component, PropTypes } from 'react';
import Loading from '../loading';
import { Link, hashHistory } from 'react-router';
import { InputNumber } from 'antd';


class CourseView extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data: {}
    };
  }

  componentWillMount(){
    const { fetchData, params } = this.props;
    fetchData(params.id);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.data !== this.props.data){
      const data = { ...nextProps.data };
      this.setState({ data });
    }
  }
  onChange(e){

  };
  renderCourseSubject(){
     const { data } = this.state;
     return(
       <div className='course-view'>
           <div className='left-image'>
             <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />

           </div>
           <div className='right-title'>
             <h2>课程:<span className='course'>{data.name}</span></h2>
              <h2>价格:<span className='price'>{data.price}</span></h2>
              <h2>购买数量:<InputNumber min={1} max={10} defaultVale={1} onChange={()=>this.onChange()} /></h2>
              <Link to='/course' className='buy-it'>立即购买</Link>
              <Link to='/course' className='add-it'>加入购物车</Link>
           </div>
           <article className='course-desc'>
               <h2>课程简介</h2>
               <hr/>

               <p>{data.description}Irwan secretly leaves his motorcycle gang every night to watch Xing,
               a beautiful stage performer from China. He offers his heart and declares
                he will never leave her. Meanwhile, being trapped, lonely and unable to
                 assimilate into Malaysian society, Xing stays with Irwan out of companionship
               rather than love.Irwan secretly leaves his motorcycle gang every night to watch Xing,
               a beautiful stage performer from China. He offers his heart and declares
                he will never leave her. Meanwhile, being trapped, lonely and unable to
                 assimilate into Malaysian society, Xing stays with Irwan out of companionship
               rather than love.Irwan secretly leaves his motorcycle gang every night to watch Xing,
               a beautiful stage performer from China. He offers his heart and declares
                he will never leave her. Meanwhile, being trapped, lonely and unable to
                 assimilate into Malaysian society, Xing stays with Irwan out of companionship
               rather than love.Irwan secretly leaves his motorcycle gang every night to watch Xing,
               a beautiful stage performer from China. He offers his heart and declares
                he will never leave her. Meanwhile, being trapped, lonely and unable to
                 assimilate into Malaysian society, Xing stays with Irwan out of companionship
               rather than love.Irwan secretly leaves his motorcycle gang every night to watch Xing,
               a beautiful stage performer from China. He offers his heart and declares
                he will never leave her. Meanwhile, being trapped, lonely and unable to
                 assimilate into Malaysian society, Xing stays with Irwan out of companionship
               rather than love.Irwan secretly leaves his motorcycle gang every night to watch Xing,
               a beautiful stage performer from China. He offers his heart and declares
                he will never leave her. Meanwhile, being trapped, lonely and unable to
                 assimilate into Malaysian society, Xing stays with Irwan out of companionship
               rather than love.</p>

           </article>
       </div>
     );
  }

  render(){
    const { loading } = this.props;
    const { data } = this.state;
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
  data: PropTypes.object.isRequired
};
export default CourseView;

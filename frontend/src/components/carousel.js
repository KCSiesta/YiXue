import React, { Component } from 'react';
import { Carousel} from 'antd';
import Img1 from '../assets/1.jpg';
import Img2 from '../assets/2.jpg';
import Img3 from '../assets/3.jpg';
import Img4 from '../assets/4.jpg';
import Img5 from '../assets/5.jpg';
import Img6 from '../assets/6.jpg';


class Imgbox extends React.Component{
  constructor(props){
    super(props);
    this.state={

    };
  }
  render(){
    return(
      <Carousel autoplay>
          <div><h3>嵌入式和软件开发</h3><img className='Img-item' src={ Img1 } alt='开发技术'/ ></div>
          <div><h3>软件开发</h3><img className='Img-item' src={ Img2 } alt='系统管理'/ ></div>
          <div><h3>网页开发</h3><img className='Img-item' src={ Img3 } alt='数据库管理'/ ></div>
          <div><h3>游戏开发</h3><img className='Img-item' src={ Img4 } alt='网络设备管理'/ ></div>
      </Carousel>
    );
  }
}

export default Imgbox;

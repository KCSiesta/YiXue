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
    <Carousel>
          <div><h3>HTML入门</h3><img className='Img-item' src={ Img1 } alt='HTML入门'/ ></div>
          <div><h3>HTML进阶</h3><img className='Img-item' src={ Img2 } alt='HTML进阶'/ ></div>
          <div><h3>UI设计</h3><img className='Img-item' src={ Img3 } alt='UI设计'/ ></div>
          <div><h3>游戏开发</h3><img className='Img-item' src={ Img4 } alt='游戏开发'/ ></div>
          <div><h3>游戏开发</h3><img className='Img-item' src={ Img5 } alt='游戏开发'/ ></div>
          <div><h3>游戏开发</h3><img className='Img-item' src={ Img6 } alt='游戏开发'/ ></div>
      </Carousel>
    );
  }
}

export default Imgbox;

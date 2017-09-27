import React,{ Component } from 'react';
import { Link,hashHistory } from 'react-router';
import { Card, Col, Row } from 'antd';

class Recomoudle extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    return(
      <div className='r-moudle'>
          <Card className='card-item'>
                  <div className="course-image">
                    <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                  </div>
                  <div className="course-card">
                    <h3>Europe Street beat</h3>
                    <p><span>PHP</span><span>¥5000.00</span></p>
                    <Link to='/course' className='course-detail'>查看详情</Link>
                  </div>
          </Card>

          <Card className='card-item'>
                  <div className="course-image">
                    <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                  </div>
                  <div className="course-card">
                    <h3>Europe Street beat</h3>
                    <p><span>PHP</span><span>¥5000.00</span></p>
                    <Link to='/course' className='course-detail'>查看详情</Link>
                  </div>
          </Card>

          <Card className='card-item'>
                  <div className="course-image">
                    <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                  </div>
                  <div className="course-card">
                    <h3>Europe Street beat</h3>
                    <p><span>PHP</span><span>¥5000.00</span></p>
                    <Link to='/course' className='course-detail'>查看详情</Link>
                  </div>
          </Card>

            <Card className='card-item'>
                    <div className="course-image">
                      <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                    </div>
                    <div className="course-card">
                      <h3>Europe Street beat</h3>
                      <p><span>PHP</span><span>¥5000.00</span></p>
                      <Link to='/course' className='course-detail'>查看详情</Link>
                    </div>
            </Card>

            <Card className='card-item'>
                    <div className="course-image">
                      <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                    </div>
                    <div className="course-card">
                      <h3>Europe Street beat</h3>
                      <p><span>PHP</span><span>¥5000.00</span></p>
                      <Link to='/course' className='course-detail'>查看详情</Link>
                    </div>
            </Card>

      </div>
    );
  }
}

export default Recomoudle;

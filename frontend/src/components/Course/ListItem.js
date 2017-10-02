import React,{ Component, PropTypes } from 'react';
import { Link,hashHistory } from 'react-router';
import { Card, Col, Row } from 'antd';

const propTypes = {
  items: PropTypes.array.isRequired
};

const ListItem = props => (
  <div className='list-item'>
    {props.items.map((item) =>
           <Link to={`/course/${item.id}`} key={item.id}>
             <Card className='card-item'>
               <div className="course-image">
                 <img alt="example" width="100%" src={item.url} />
               </div>
               <div className="course-card">
                 <h3>{item.name}</h3>
                 <p><span>销量:{item.type_id}</span><span>¥{item.price}</span></p>
                <a href={`/course/${item.id}`} key={item.id} className='course-detail'>查看详情</a>
               </div>
              </Card>
           </Link>
    )}
  </div>
);

ListItem.propTypes = propTypes;

export default ListItem;

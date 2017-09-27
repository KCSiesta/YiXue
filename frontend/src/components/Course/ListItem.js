import React,{ Component } from 'react';
import { Link,hashHistory } from 'react-router';
import { Card, Col, Row } from 'antd';

const propTypes = {
  items: PropTypes.array.isRequired
}

const ListItem = props => (
  <Card className='card-item'>
     {props.items.map((item) =>
       <Link to={`/course/${item.id}`} key={item.id}>
           <div className="course-image">
             <img alt="example" width="100%" src={item.url} />
             //<img alt="example" width="100%" src={item.images.large} />
           </div>
           <div className="course-card">
             <h3>/*{item.title}*/{item.name}</h3>
             <p><span>{item.type_id}</span><span>/*{item.directors.length}*/¥{item.price}</span></p>
           <Link to={`/course/${item.id}`} key={item.id} className='course-detail'>查看详情</Link>
           </div>
       </Link>
     )}
  </Card>
)

ListItem.propTypes = propTypes;

export default ListItem;

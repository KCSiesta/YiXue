import React,{ Component } from 'react';
import { Menu, Icon } from'antd';
import { Link, hashHistory } from 'react-router';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import { DatePicker } from 'antd';
import { PropTypes } from 'prop-types';
const arr= [
  {
    bigMenu:'前端开发',
    smallMenu:['HTML','CSS','JavaScript','React','其他'],
  },
  {
    bigMenu:'后端开发',
    smallMenu:['Java','Python','PHP','C++','其他'],
  },
  {
    bigMenu:'UI设计',
    smallMenu:['Axure','CoreIDRAW','Photoshop','Illustrator','其他'],
  },
  {
    bigMenu:'游戏开发',
    smallMenu:['手机游戏','网页游戏','单机游戏','小游戏','其他'],
  },
];

class Sidebar extends React.Component{
  constructor(props,context) {
    super(props,context);
    this.state ={
       current:'',
       openKeys:[],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  /*组件渲染之后才调用，如果使用componentWillMount()则报错不能渲染
  componentDidMount(){
    const { fetchData,params } = this.props;
    fetchData(params.id);
    //console.log(fetchData(params.name));
  }*/

  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
      openKeys: e.keyPath.slice(1),
    });
    console.log(this.state.openKeys + this.state.current);
    //window.location.hash = '/'+e.key;
    //fetchData(current);
  }

  render(){
    return(
      <Menu className='s-menu' mode='vertical' onClick={this.handleClick}>
         {
           arr.map((item,index)=> {
             return <SubMenu className='menu-submenu' key={item.bigMenu} onClick={this.handleClick} title={<span>{item.bigMenu}</span>}  selectedKeys={[this.state.current]} openKeys={this.state.openKeys}>
              {
                <MenuItemGroup title={item.bigMenu}>
                      {item.smallMenu.map((o,i)=>{
                        return <Menu.Item key={o}><Link to={`/menu/${o}`}>{o}</Link></Menu.Item>;
                      })}
                </MenuItemGroup>
               }
              </SubMenu>;
           })
         }
      </Menu>
    );
  }
}

Sidebar.propTypes={
  fetchData: PropTypes.func,
  params: PropTypes.object
};

export default Sidebar;

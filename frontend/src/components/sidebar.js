import React,{ Component } from 'react';
import { Menu, Icon } from'antd';
import { Link } from 'react-router';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import { DatePicker } from 'antd';

const arr= [
  {
    bigMenu:'前端开发',
    smallMenu:['HTML','CSS','JavaScript','React','其他'],
  },
  {
    bigMenu:'后端开发',
    smallMenu:['HTML','CSS','JavaScript','React','其他'],
  },
  {
    bigMenu:'UI设计',
    smallMenu:['HTML','CSS','JavaScript','React','其他'],
  },
  {
    bigMenu:'游戏开发',
    smallMenu:['HTML','CSS','JavaScript','React','其他'],
  },
];

class Sidebar extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
       current:'',
       openKeys:[],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
      openKeys: e.keyPath.slice(1),
    });
    console.log(this.state.openKeys + this.state.current);
    window.location.hash = e.key;
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
                        return <Menu.Item key={o}>{o}</Menu.Item>;
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

export default Sidebar;

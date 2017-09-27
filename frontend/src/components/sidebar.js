import React,{ Component } from 'react';
import { Menu, Icon } from'antd';
import { Link } from 'react-router';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import { DatePicker } from 'antd';

class Sidebar extends React.Component{
  constructor(props) {
    super(props);
    this.state ={

    };
  }

  handleClick(e) {
    console.log();
  }

  render(){
    return(
      <Menu onClick={() => this.handleClick()} className='s-menu' mode='vertical'>
         <SubMenu key='sub1' className='menu-submenu' title={<span>嵌入式与移动开发</span>}>
            <MenuItemGroup title="嵌入式与移动开发">
                <Menu.Item key='1'><Link to='/course'>C</Link></Menu.Item>
                <Menu.Item key='2'><Link to='/course'>C++</Link></Menu.Item>
                <Menu.Item key='3'><Link to='/course'>IOS</Link></Menu.Item>
                <Menu.Item key='4'><Link to='/course'>Android</Link></Menu.Item>
                <Menu.Item key='5'><Link to='/course'>H5混合开发</Link></Menu.Item>
                <Menu.Item key='6'><Link to='/course'>其它</Link></Menu.Item>
            </MenuItemGroup>
          </SubMenu>

         <SubMenu key='sub2' className='menu-submenu' title={<span>软件开发</span>}>
            <MenuItemGroup title="软件开发">
                <Menu.Item key='7'>Java</Menu.Item>
                <Menu.Item key='8'>C++</Menu.Item>
                <Menu.Item key='9'>ASP</Menu.Item>
                <Menu.Item key='10'>.NET</Menu.Item>
                <Menu.Item key='11'>C#</Menu.Item>
                <Menu.Item key='12'>其它</Menu.Item>
            </MenuItemGroup>
         </SubMenu>
         <SubMenu key='sub3' className='menu-submenu' title={<span>网页开发</span>}>
            <MenuItemGroup title="网页开发">
                <Menu.Item key='13'>ASP</Menu.Item>
                <Menu.Item key='14'>.NET</Menu.Item>
                <Menu.Item key='15'>PHP</Menu.Item>
                <Menu.Item key='16'>HTML</Menu.Item>
                <Menu.Item key='17'>其它</Menu.Item>
            </MenuItemGroup>
         </SubMenu>
         <SubMenu key='sub4' className='menu-submenu' title={<span>游戏开发</span>}>
            <MenuItemGroup title="游戏开发">
                <Menu.Item key='13'>手机游戏</Menu.Item>
                <Menu.Item key='14'>网页游戏</Menu.Item>
                <Menu.Item key='15'>单机游戏</Menu.Item>
                <Menu.Item key='16'>电视游戏</Menu.Item>
                <Menu.Item key='17'>小游戏</Menu.Item>
            </MenuItemGroup>
        </SubMenu>
      </Menu>
    );
  }
}

export default Sidebar;

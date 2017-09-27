import React,{ Component } from 'react';
import { Link, hashHistory} from 'react-router';
import { Tabs } from 'antd';
import Recomoudle from '../components/card';
const TabPane = Tabs.TabPane;

class Tab extends React.Component{
  constructor(props){
    super(props);
    this.setState={

    };
  }

  callback(key){

  };

  render(){
    return(
      <Tabs defaultActive='1' onChange={() => this.callback()}>
         <TabPane tab ='C' key='1'><Recomoudle /></TabPane>
         <TabPane tab ='C++' key='2'><Recomoudle /></TabPane>
         <TabPane tab ='iOS' key='3'><Recomoudle /></TabPane>
         <TabPane tab ='Andriod' key='4'><Recomoudle /></TabPane>
      </Tabs>
    );
  }
}

export default Tab;

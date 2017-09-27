import React from 'react';
import ReactDOM from 'react-dom';
//import styles from './styles/BasicExample-m.css';
import { AppContainer } from 'react-hot-loader';
import Counter from './Counter';
import BasicExample from './components/BasicExample';
if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
     <AppContainer>
         <BasicExample/>
     </AppContainer>,
document.body);

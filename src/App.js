import React from 'react';
import logo from './logo.svg';
import axios from 'axios';

import './App.css';
import MainMenu from './components/MainMenu'
import MainRoute from './components/page/MainRoute'
import {Row,Col} from 'antd';
import PersonList from './components/PersonList'

function App() {
  return (
      <div>
        <MainMenu/>
        <Row guter={8}>
          <Col span={24}>
            <br/>
            <MainRoute/>
          </Col>
        </Row>
      </div>
  );
}

export default App;

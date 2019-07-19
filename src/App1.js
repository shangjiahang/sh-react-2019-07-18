import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core';  // 导入Button组件

function App1() {
  return (
      <div className="weui-navbar">
        <div className="weui-navbar__item weui-bar__item_on">
            选项一
        </div>
        <div className="weui-navbar__item">
            选项二
        </div>
        <div className="weui-navbar__item">
            选项三
        </div>
    	</div>
  );
}

export default App1;

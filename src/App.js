import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';
import HelloMessage from './base/header/header'; // 组件名称需要首字母大些，驼峰形式，组件必须要被包裹，也就是外层至少要有一个div
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import routes from './routers/router';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    this.API = window.API // 绑定全局
  }

  login = () => {
    let params = {
      account: 18688721763,
      password: '54a8df651a6f1b5c359c6e1d106da20d'
    }
    this.API.login(params)
    .then((res) => {
      alert('登录成功')
    })
  }

  goGoods = () => {
    this.this.props.history.pushState(null, '/goods')
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className='myApp-header'>
            <div onClick={this.goGoods}>首页<span className='login' onClick={this.login}>登录</span></div>
          </header>
          <Route exact path={'/'} component={HelloMessage}/> {/*exact:不让组件永远存在*/}
          {routes.map((route, i) => { /*路由渲染*/
            return <Route key={i} path={route.path === '/Myself'? '/Myself/:id' : route.path} component={route.component}/>
          })}
          <footer className='footer'>
            <ul>
              <li><Link to="/">首页</Link></li>
              <li><Link to="/goods">商城</Link></li>
              <li><Link to="/Car">购物车</Link></li>
              <li><Link to="/Myself/16">个人中心</Link></li>
            </ul>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;

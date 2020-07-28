import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {message} from "antd";
import {
  LoginWrapper, Input, Button,
} from './style';
import {loginAccount} from "./action";

class Login extends PureComponent {
  render() {
    const {handleLogin, loginStatus} = this.props;

    if (!loginStatus) {
      return (
          <LoginWrapper>
            <Input placeholder='输入用户名' ref={input => this.name = input}/>
            <Input placeholder='输入密码' type='password' ref={input => this.password = input}/>
            <Button onClick={() => handleLogin(this.name, this.password)}>登录</Button>
          </LoginWrapper>
      )
    } else {
      return <Redirect to='/'/>
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.login.get('loginStatus')
})

const mapDispatch = (dispatch) => ({
  handleLogin(name, password) {
    message.info("login success ~");
    dispatch(loginAccount(name.value, password.value));
  }
})

export default connect(mapState, mapDispatch)(Login);
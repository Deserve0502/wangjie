import React, { Component } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
//import axios from 'axios'
import { Link, Switch, Route, Redirect } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const NormalLoginForm = () => {
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
}
export default class LoginForm extends Component {

    render() {
        return (
            <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
     
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: '请输入您的用户名',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: '请输入您的密码',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="密码"
        />
      </Form.Item>
      <Form.Item>
      

      <Link to='/login/forget-pass' style={{marginLeft:'10%',display:'block'}}>忘记密码</Link>
         
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
        <p className='logT'>没有账号？</p>
        <p style={{textAlign:'center'}}>
        <Link to='/login/login-ph'>手机号登陆/注册</Link>
        </p>
      </Form.Item>
     
              
    </Form>
        )
    }
}
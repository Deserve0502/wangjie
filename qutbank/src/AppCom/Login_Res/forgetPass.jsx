import React, { Component } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
//import axios from 'axios'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import CoutDownBtn from '../CoutDownBtn/CoutDownBtn'
const NormalLoginForm = () => {
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
}
export default class LoginPh extends Component {

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
            message: '请输入您的手机号',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="手机号" />
      </Form.Item>
      <Form.Item
        name=""
        rules={[
          {
            required: true,
            message: '请输入您的验证码',
          },
        ]}
      >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="验证码" style={{width:'40%'}}/>
      </Form.Item>
      
      <CoutDownBtn></CoutDownBtn>
     
         
     

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          重置密码
        </Button>
     
        <p style={{textAlign:'center',marginTop:'20px'}}>
        <NavLink to='/login/login-form'>用户名登陆</NavLink>
        </p>
      </Form.Item>
       
    </Form>
        )
    }
}
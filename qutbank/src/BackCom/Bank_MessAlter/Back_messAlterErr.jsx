import React, { Component } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
//import axios from 'axios'
//import { NavLink,Switch,Route,Redirect } from 'react-router-dom'
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
export default class BankMessSucc extends Component {
    render() {
        return (
            <div className='alter_err' >
                <Result
                     status="warning"
                    title="修改题库超时！"
                    subTitle="请重新进入修改题库"
                   
                    extra={
                      
                        [
                        <Link to='/backIndex/backMessage' key="err">   
                        <Button type="primary" >
                            返回题库页
      </Button>,
      </Link> 
                        // <Button key="buy">Buy Again</Button>,
                    ]}
                />,
            </div>
        )
    }
}
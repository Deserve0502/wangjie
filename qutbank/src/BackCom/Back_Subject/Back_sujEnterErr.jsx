import React, { Component } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
//import axios from 'axios'
//import { NavLink,Switch,Route,Redirect } from 'react-router-dom'
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
export default class SubEnterErr extends Component {
    render() {
        return (
            <div className='Enter_err' >
                <Result
                     status="error"
                    title="进入题库失败！"
                    subTitle="请重新进入题库"
                   
                    extra={
                      
                        [
                        <Link to='/backIndex/backMessage' key="EnterErr">   
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
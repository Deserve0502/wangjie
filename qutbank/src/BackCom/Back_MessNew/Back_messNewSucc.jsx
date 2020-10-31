import React, { Component } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
//import axios from 'axios'
//import { NavLink,Switch,Route,Redirect } from 'react-router-dom'
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
export default class backMessNewSucc extends Component {
    render() {
        return (
            <div className='alter_succ'>
                <Result
                    status="success"
                    title="新增题库成功！"
                    subTitle="新增题库的id是: 2017182818828182881"

                    extra={[
                        <Link to='/backIndex/backMessage' key="message">
                        <Button type="primary" >
                            返回题库页
                        </Button>
                        </Link>
                        ,
                        <Link to='/backIndex/backMessNew' key="new">
                        <Button >继续新增题库</Button>
                        </Link>
                        ,
                    ]}
                  
                />,
            </div>
        )
    }
}
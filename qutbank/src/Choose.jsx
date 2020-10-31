import React, { Component } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
//import axios from 'axios'
import { NavLink,Switch,Route,Redirect,HashRoute } from 'react-router-dom'
import './Choose.css'

export default class Choose extends Component {
    render() {
        return (
            <div>
            <div className='chos_bg'>
                <div className='chos_sq'>

                    <img src="../ass/QuestionBack/未标题14-1.png" alt=""  />

                    <div>
                        <p style={{ fontSize: '23px', lineHeight: '172px',fontWeight:'bold' }}>欢迎来到题库系统</p>
                        <p>请选择进入：</p>
                        <div className='chos_btn'>
                        <NavLink to='/pri'>
                            <button type="button" className="btn btn-primary">进入APP</button>
                        </NavLink>
                        <NavLink to='/backLogin'>
                            <button type="button" className="btn btn-primary">进入后台管理系统</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
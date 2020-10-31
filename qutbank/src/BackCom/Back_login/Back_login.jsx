import React,{Component} from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
//import axios from 'axios'
//import { NavLink,Switch,Route,Redirect } from 'react-router-dom'
import './Back_login.css'
import BackForm from './Back_form'


export default class BackIndex extends Component{
    render(){
        return(
            <div>
            <div>
            <div className='bk_login'>
            <img src="../ass/QuestionBack/login.png" alt="" />
            <div className='back_form'>
            <p>题库后台管理中心</p>
            <BackForm></BackForm>
            </div>
            </div>
            </div>
</div>
         
         )
    }
}
import React, { Component } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
//import axios from 'axios'
import { Link,Switch,Route,Redirect,HashRouter,BrowserRouter } from 'react-router-dom'
import '../../BackCom/Back_Index/antd.min.css'
import './login.css'
import { Divider } from 'antd';
import LoginForm from './login_form'
import LoginPh from './login_ph'
import ForgetPass from './forgetPass'
import AnimatedSwitch from '../AnimatedSwitch/AnimatedSwitch'
export default class login extends Component {
    render() {
        return (
            <BrowserRouter>
            <div className='login'>
                <img src="../ass/QuestionBankImg/logo1.png" alt="" />
             
               
                
                <div className='log_For'>
                <p className='log_title'>
                   题酷TK  
               
                 
               </p>
           
               <AnimatedSwitch>
              
                            <Route path='/login/login-form' component={LoginForm}>

                            </Route>
                            <Route path='/login/login-ph' component={LoginPh}>

                            </Route>
                            <Route path='/login/forget-pass' component={ForgetPass}>

</Route>
 <Redirect to='/login/login-form'></Redirect>
                         
                        </AnimatedSwitch>
                </div>
            </div>
            </BrowserRouter>
        )
    }
}

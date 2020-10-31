import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, withRouter, Switch, Redirect, Route, Fragment } from 'react-router-dom'


import {Provider} from 'react-redux'


// import Back from './BackCom/BACK.jsx'
import Back from './BackCom/Back_Index/back_Index'

import AnimatedSwitch from './AppCom/AnimatedSwitch/AnimatedSwitch'
import Choose from '../src/Choose'
import BackLogin from './BackCom/Back_login/Back_login'
import APP from './AppCom/APP'
import AdverFirst from './AppCom/AdverFirst/AdverFirst'
import Login from './AppCom/Login_Res/login'


class Test extends Component {

  render() {
    console.log(this.props)
    return (

      <BrowserRouter>
        <Switch>


          <Redirect exact from="/" to="/choose"></Redirect>
          <Route path='/choose' component={Choose} />
          <Route path='/backLogin' component={BackLogin} />

          <Route path='/pri' component={AdverFirst} />
          <Route path='/login' component={Login} />
          <Back />



        </Switch>

      </BrowserRouter>

    )



  }
}

ReactDOM.render(
  <Test />,
  document.getElementById('root')
)


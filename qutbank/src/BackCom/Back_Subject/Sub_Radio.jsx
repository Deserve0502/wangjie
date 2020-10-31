import React,{Component} from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
//import axios from 'axios'
//import { NavLink,Switch,Route,Redirect } from 'react-router-dom'
import {
    Input, Card, Form,
    Select,
    InputNumber,
    Switch,
    Radio,
    Slider,
    Button,
    Upload,
    Rate,
    Checkbox,
    Row,
    Col,
} from 'antd';
const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '36px',
};
export default class SubRadio extends Component{
   
    render(){
        return(
        
            <Radio.Group value={this.props.value.rightAnswer} disabled>
            <Radio style={radioStyle} value={'A'}>
               {this.props.value.optA}
            </Radio>
            <Radio style={radioStyle} value={'B'}>
            {this.props.value.optB}
            </Radio>
            <Radio style={radioStyle} value={'C'}>
            {this.props.value.optC}
            </Radio>
            <Radio style={radioStyle} value={'D'}>
            {this.props.value.optD}
            </Radio>
        </Radio.Group>
      
         )
    }
}
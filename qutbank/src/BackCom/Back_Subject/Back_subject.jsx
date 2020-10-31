import React, { Component } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
import axios from '../../axios/index'
//import { NavLink,Switch,Route,Redirect } from 'react-router-dom'
import './Back_subject.css'
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
    Popconfirm,
    message
} from 'antd';

import SubRadio from './Sub_Radio'
import SubCheck from './Sub_Check'
import BackSubAlter from '../Back_SubAlter/Back_subAlter'

const { TextArea } = Input;
export default class BackSub extends Component {
    state = {
        subject: [],
        sub_length: null,
        i: 1,
        value: 1,
    }
    // onChange = e => {
    //     console.log('radio checked', e.target.value);
    //     this.setState({
    //         value: e.target.value,
    //     });
    // };
    componentDidMount() {
        if (this.props.location.query === undefined) {
            this.props.history.push('/backIndex/backMessage/SubEnterErr')
        } else {
           
            const url = "/api/001"
            axios.get(url, {
            }).then(response => {
                if (!response) {
                    console.log('Loading')
                } else {
                    // console.log(response.data)
                    this.setState({
                        subject: response.data
                    })
                    this.setState({
                        sub_length: response.data.length
                    })

                }
                // console.log(this.state.subject, this.state.sub_length)
            })
        }

    }
    confirm = (num1,num2) => {
        message.info('删除成功！');
        console.log("题库id是"+num1,"题目id是"+num2)
    }
    
  goEdit=(id)=>{
    this.props.history.push( {pathname:'/backIndex/backMessage/backSub/backSubAlter',query:{id:id}} )
  }
  accptRigAn=(rightAnswer)=>{
    //   this.setState({
          
    //   })
  }
    render() {

        let { subject, sub_length, i } = this.state;
        const isDel = '你确定要删除吗？';
        return (
            <div className='subject_bg'>
                <div className="container">
                    <p style={{ fontSize: '30px', marginBottom: '0.05rem' }}>题目信息</p>
                    <ul>

                        {
                            subject.map((subjectList, index) => {
                                let arr = subjectList.rightAnswer.split("");
                                let str = arr.join("、")
                              
                                return (

                                    <li key={index} >
                                        <Card
                                            title={`${i++}.  题目ID : ${subjectList.subId}`}
                                            extra={[
                                              
                                                <BackSubAlter  key={i} value={subjectList} index={i} accptRigAn={this.accptRigAn}/>,
                                                <Popconfirm placement="top" title={isDel} onConfirm={()=>this.confirm(this.props.location.query.id,subjectList.subId)} okText="确定" cancelText="取消" key='del'>
                                                <Button ghost  >删除</Button>
                                                </Popconfirm>
                                            ]

                                            }
                                            style={{ width: '100%' }}>
                                            <p>题目类型：{subjectList.subClassisfy}</p>
                                            <div>
                                                题目内容： {subjectList.subContent}
                                            </div>
                                            <div style={{position:'relative'}}>
                                           <span style={{position:'absolute',top:'7px'}}>选项：</span>
                                            {
                                               arr.length==1? <SubRadio value={subjectList}/>:<SubCheck value={subjectList} /> 
                                
                                            }
                                            </div>
                                            <p style={{marginTop:'25px'}}>正确答案：{str}</p>




                                           



                                        </Card>
                                    </li>

                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        )
    }
}
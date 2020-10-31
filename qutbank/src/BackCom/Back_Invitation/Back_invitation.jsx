import React, { Component } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
//import axios from 'axios'
//import { NavLink,Switch,Route,Redirect } from 'react-router-dom'
import './Back_invitation.css'
import {
    Form,
    Input,
    Select,
    Switch,
    Row, Col, Button, Result, DatePicker, Space
} from 'antd';

import { CheckOutlined,DownloadOutlined,PlusCircleOutlined } from '@ant-design/icons';
import PostInvitation from './Back_PostInvitation'
import DelInvitation from './Back_DelInvitation'

export default class BackInvitation extends Component {
state={
    invValue:'系统发帖'
}
handleChangeSelect(event){
    this.setState({
        invValue:event,
    })
    console.log(this.state.invValue)
}
onChange=(date, dateString)=> {
    console.log(dateString);
  }
    render() {
        return (
            <div className='Inva_bg' >
                <div className="container" >
                    <p style={{ fontSize: '30px', marginBottom: '0.05rem' }}>系统帖子</p>
                    <Row>
                        <Col span={4} style={{ textAlign: 'right' }}>请选择类型：</Col>
                        <Col span={4}>
                            <Form.Item >

                                <Select value={this.state.invValue} onChange={(event) => this.handleChangeSelect(event)}>
                                    <Select.Option value="系统发帖">系统发帖</Select.Option>
                                    <Select.Option value="系统删帖">系统删帖</Select.Option>
                                </Select>

                            </Form.Item>
                        </Col>
                        <Col span={4} style={{ textAlign: 'right' }}>请选择日期：</Col>
                        <Col span={4} >
                            <Space direction="vertical" id="ac">
                                <DatePicker onChange={this.onChange}
                                getPopupContainer={() => document.getElementById('ac')}
                                />

                            </Space>
                            
                        </Col>
                        <Col span={4} offset={2}>
                        <Button type="primary" icon={<PlusCircleOutlined />} className='postIn'>
                        发布新帖
                        </Button>
                            
                            
                        </Col>
                    </Row>

                    <div>
                  {
                      this.state.invValue==='系统发帖'?<PostInvitation/>:<DelInvitation/>
                  }

                    </div>

                </div>

            </div>
        )
    }
}
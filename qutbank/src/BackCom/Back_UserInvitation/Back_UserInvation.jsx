import React, { Component } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
import axios from 'axios'
//import { NavLink,Switch,Route,Redirect } from 'react-router-dom'
import './Back_UserInvation.css'
import {
    Form,
    Input,
    Select,
    Switch,
    Row, Col, Button, Result, DatePicker, Space
} from 'antd';

import { CheckOutlined, DownloadOutlined, PlusCircleOutlined,AudioOutlined  } from '@ant-design/icons';

import { Comment, Tooltip, List } from 'antd';
import moment from 'moment';
const { Search } = Input;
export default class BackInvitation extends Component {
    state = {
        invValue: '系统发帖',
        data: [],
        actions: [<span key="check">查看</span>,
        <span key="del">删除</span>
        ],
    }
    handleChangeSelect(event) {
        this.setState({
            invValue: event,
        })
        console.log(this.state.invValue)
    }
    onChange = (date, dateString) => {
        console.log(dateString);
    }
    onSearch = value => console.log(value);
    componentDidMount() {
        const url = "/api/UserInvitation"
        axios.get(url).then(response => {
            if (!response) {
                console.log('Loading')
            } else {
                console.log(response.data)
                this.setState({
                    data: response.data
                })
            }
        })
    }
    render() {
        let { data } = this.state
        return (
            <div className='Inva_bg' >
                <div className="container" >
                    <p style={{ fontSize: '30px', marginBottom: '0.05rem' }}>用户帖子</p>
                    <Row>
                    <Col span={12} offset={6}> 
                    <Search 
                    placeholder="请输入帖子/用户" 
                    enterButton="搜索" 
                    onSearch={this.onSearch} />
                    </Col>
                    </Row>

                    <div>
                        <List
                            className="comment-list"
                            header={`${data.length} 条发帖`}
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                                <li className='inv_li'>
                                    <Comment
                                        actions={this.state.actions}
                                        author={item.author}
                                        avatar={item.avatar}
                                        content={item.content}
                                        datetime={item.datetime}
                                    />
                                </li>
                            )}
                        />

                    </div>

                </div>

            </div>
        )
    }
}
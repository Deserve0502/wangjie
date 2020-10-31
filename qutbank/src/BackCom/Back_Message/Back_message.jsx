import React, { Component, createRef } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
import axios from '../../axios/index'
import { Link, Switch, Route, Redirect } from 'react-router-dom'
import './Back_message.css'
import { Input, Button, Popconfirm, message, Modal } from 'antd';
import { AudioOutlined, DeleteOutlined, PlusCircleOutlined, FormOutlined, EyeOutlined, SelectOutlined } from '@ant-design/icons';
import { Pagination } from 'antd';
import MesCheck from './Mes_Check.jsx'
const { Search } = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);

export default class BackMessage extends Component {
    state = {
        qutList: [],
        classifyShow: null,
        willDel: [],
        DelObj: {
            id: null
        },
        modal1Visible: false,
        modal2Visible: false,

    }
    setModal1Visible(modal1Visible) {
        this.setState({ modal1Visible });
    }

    setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
    }
    checkallInpt = React.createRef();
    checkSingleInpt = React.createRef();
    componentDidMount() {
        const url = "/api/data"
        axios.get(url).then(response => {
            if (!response) {
                console.log('Loading')
            } else {
                let { qutList } = this.state;
                qutList = response.data;
                this.setState({ qutList });
            }
        })
    }

    isdifficultyShow = (str) => {
        if (str === '简单') {
            return 'btn-success';
        }
        if (str === '中等') {
            return 'btn-warning';
        }
        if (str === '困难') {
            return 'btn-danger';
        }
    }

    checkAll = (event) => {
        let { willDel } = this.state;
        const { qutList } = this.state;
        let objInput = document.getElementsByClassName('checkSingleInpt1');
        if (event.target.checked) {
            qutList.map((item) => {
                willDel.push(item.id);
            })
            for (let i = 0; i < objInput.length; i++) {
                objInput[i].checked = true;
            }
            willDel = Array.from(new Set(willDel));
            this.setState({ willDel });
            console.log(willDel);
        } else {
            for (let i = 0; i < objInput.length; i++) {
                objInput[i].checked = false;
            }
            willDel.splice(0);
            this.setState({ willDel });
            console.log(willDel);
        }
    }

    delSingle = (id, event) => {
        let { willDel } = this.state;
        this.checkallInpt.current.checked = false;
        if (event.target.checked === true) {
            willDel.push(id);
            willDel = Array.from(new Set(willDel));
            this.setState({ willDel });
        } else {
            willDel = willDel.filter(function (item) {
                return item != id;
            });
            willDel = Array.from(new Set(willDel));
            this.setState({ willDel });
        }
        console.log(willDel);

    }
    allDel = () => {
        let { DelObj } = this.state;
        let { willDel } = this.state;
        willDel.forEach(element => {
            DelObj.id = element;
            this.setState({ DelObj })
            console.log(DelObj)
        });
        message.info('删除成功！');
    }

    onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
    }
    changeNum = (num) => {
        console.log(num)
    }
    confirm = (num) => {
        message.info('删除成功！');
        console.log(num)
    }
    render() {
        let { qutList } = this.state;
        const isDel = '你确定要删除吗？';
        const isAllDel = '你确定批量删除吗？'
        return (
            <div className='back_mes'>
                <div className="container">
                    <div className="panel">
                        <div className="panel-heading">
                            <p style={{ fontSize: '30px', marginBottom: '0.05rem' }}>题库信息管理</p>

                        </div>
                        <div className='mes_nav'>
                            <Popconfirm placement="top" title={isAllDel} onConfirm={this.allDel} okText="确定" cancelText="取消">
                                <Button
                                    type="primary"
                                    icon={<DeleteOutlined />}

                                    style={{ backgroundColor: 'red' }}
                                >
                                    批量删除
                            </Button>
                            </Popconfirm>

                            <Link to={{ pathname: '/backIndex/backMessNew' }}>

                                <Button
                                    type="primary"
                                    icon={<PlusCircleOutlined />}

                                >
                                    新增题库
                                </Button>
                            </Link>
                            <Search placeholder="搜索题库" onSearch={value => console.log(value)} enterButton />
                        </div>
                        <div className="panel-body">
                            <table className="table table-bordered table table-hover table-striped">
                                <thead>
                                    <tr>
                                        <td>
                                            <input type="checkbox" name="" id="" onChange={(event) => this.checkAll(event)} ref={this.checkallInpt} />
                                            <span style={{ marginLeft: '20px', boxSizing: 'border-box' }}>题库ID</span>

                                        </td>
                                        <td>

                                            <span >题库名称</span>

                                        </td>


                                        <td>题目类型</td>
                                        <td>难易度</td>
                                        <td>是否热门</td>
                                        <td>操作</td>

                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        qutList.map((qutList, index) => {
                                            let classifyShow = qutList.classify;
                                            let difficultyShow = qutList.difficulty;
                                            return (
                                                <tr key={index} >
                                                    <td>
                                                        <input type="checkbox" name="" id=""

                                                            onChange={(event) => this.delSingle(qutList.id, event)}

                                                            className='checkSingleInpt1'
                                                        />
                                                        <span style={{ marginLeft: '20px', boxSizing: 'border-box' }}>
                                                            {qutList.id}
                                                        </span>

                                                    </td>
                                                    <td>

                                                        <span >
                                                            {qutList.name}
                                                        </span>
                                                    </td>


                                                    <td><button type="button" className=
                                                        {
                                                            classifyShow === '免费' ? 'btn-success' : 'btn-warning'
                                                        }
                                                        disabled
                                                    >{qutList.classify}</button></td>
                                                    <td>
                                                        <button type="button" className=
                                                            {

                                                                this.isdifficultyShow(difficultyShow)
                                                            }
                                                            disabled
                                                        >{qutList.difficulty}</button>
                                                    </td>
                                                    <td>{qutList.hot}</td>

                                                    <td>

                                                        
                                                         
                                                            <MesCheck value={qutList}></MesCheck>
                                      
                                                        <Link to={{ pathname: '/backIndex/backMessage/backMessAlter', query: { id: qutList.id } }}>
                                                            <Button
                                                                type="primary"
                                                                icon={<FormOutlined />}

                                                            >
                                                                编辑</Button>
                                                        </Link>
                                                        <Link to={{ pathname: '/backIndex/backMessage/backSub', query: { id: qutList.id } }}>

                                                            <Button
                                                                type="primary"
                                                                icon={<SelectOutlined />}
                                                                style={{ backgroundColor: '#52c41a' }}

                                                            >
                                                                进入题库</Button>
                                                        </Link>
                                                        <Popconfirm placement="top" title={isDel} onConfirm={() => this.confirm(qutList.id)} okText="确定" cancelText="取消">
                                                            <Button
                                                                type="primary"
                                                                icon={<DeleteOutlined />}

                                                                style={{ backgroundColor: 'red' }}
                                                            >


                                                                删除</Button>
                                                        </Popconfirm>

                                                    </td>
                                                </tr>
                                            )
                                        })

                                    }









                                </tbody>

                                <tfoot>

                                </tfoot>
                            </table>

                        </div>

                    </div>

                </div>

                <div className='mes_page'>
                    <Pagination
                        showSizeChanger
                        // onClick={this.nextPage}
                        onChange={this.changeNum}
                        onShowSizeChange={this.onShowSizeChange}
                        defaultCurrent={1}
                        total={500}
                    />
                </div>

            </div>
        )

    }
}
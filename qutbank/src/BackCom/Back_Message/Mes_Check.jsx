import React, { Component } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
//import axios from 'axios'
//import { NavLink,Switch,Route,Redirect } from 'react-router-dom'
import { Modal, Button } from 'antd';
import { AudioOutlined, DeleteOutlined, PlusCircleOutlined, FormOutlined, EyeOutlined, SelectOutlined } from '@ant-design/icons';
export default class MesCheck extends Component {
    state = {
        modal1Visible: false,
        modal2Visible: false,
    };
   

    setModal1Visible(modal1Visible) {
        this.setState({ modal1Visible });
    }

    setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
    }
    render() {
        return (
            <>
                <Button
                    type="primary"
                    icon={<EyeOutlined />}
                    style={{ backgroundColor: '#faad14' }}
                    onClick={() => this.setModal2Visible(true)}
                >
                    查看</Button>
                <Modal
                    title={this.props.value.name}
                    centered
                    visible={this.state.modal2Visible}
                    onOk={() => this.setModal2Visible(false)}
                    onCancel={() => this.setModal2Visible(false)}

                    okText='确认'
                    cancelText='取消'
                >
                    <p>题库ID：{this.props.value.id}</p>
                    <p>题库介绍：{this.props.value.intro}</p>
                    <p>题库类型：{this.props.value.classify}</p>
                    <p>题库难易度：{this.props.value.difficulty}</p>
                    <p>是否热门：{this.props.value.hot}</p>
                </Modal>
            </>
        )
    }
}
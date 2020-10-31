import React, { Component, useState } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
import axios from '../../axios/index'
//import { NavLink,Switch,Route,Redirect } from 'react-router-dom'
// import './Banl_messAlter.css'
import './Back_subAlter.css'
import {
  Form,
  Input,
  Select,
  Switch,
  Row, Col, Button, Result, Drawer,
  message, Space

} from 'antd';

import { CheckOutlined, DownloadOutlined, CheckCircleOutlined } from '@ant-design/icons';
import SubAlterCheck from './SubAlter_Check'
import SubAlterRadio from './SubAlter_Radio'
const { TextArea } = Input;
const key = 'updatable';
export default class BackSubAlter extends Component {

  state = {
    visible: false,
    subject: this.props.value,
    isRadio: false,
    subClassisfy: this.props.value.subClassisfy,
    subContent: this.props.value.subContent,
    optA: null,
    size: 'default',
    rightAnswer: this.props.value.rightAnswer,
  };
  componentWillMount() {
    if (this.props.value.subClassisfy === '单选') {
      this.setState({
        isRadio: true
      })
    } else {
      this.setState({
        isRadio: false
      })
    }

  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  handleChangeSelect1 = (event) => {
    this.setState({
      subClassisfy: event
    },
      this.setState({
        isRadio: !this.state.isRadio

      })
    );

  }
  handleChangeText = ({ target: { value } }) => {
    this.setState({
      subContent: value
    });
  }
  SubAlterSubmit = () => {

    if (this.state.isRadio === true && this.state.rightAnswer.length !== 1) {
      message.error('请输入单选的选项！');
    } else {
      message.loading({ content: '请稍等...', key });
      setTimeout(() => {
        message.success({ content: '提交成功', key, duration: 2 });
        this.onClose();
      }, 1000);
      
      console.log(
        '题目ID是', this.props.value.subId,
        '内容是：', this.state.subContent,
        '是否单选', this.state.isRadio,
        '答案', this.state.rightAnswer
      )
    }
  }
  AccptValue = (rightAnswer) => {
    this.setState({
      rightAnswer: rightAnswer
    })
  }
  render() {
    const { size } = this.state;
    return (
      <>
        <div className="site-drawer-render-in-current-wrapper">
          <div >

            <Button ghost key='edit' style={{ marginRight: '20px' }} onClick={this.showDrawer}>编辑</Button>
          </div>
          <Drawer
            title={`${this.props.index}. 题目ID：${this.props.value.subId}`}
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
            getContainer={false}
            style={{ position: 'absolute' }}
            width='50%'
          >
            <div style={{ display: "flex", justifyContent: 'space-around' }}>
              <div>
                <p>题目内容：</p>
                <TextArea
                  showCount
                  maxLength={100}
                  value={this.state.subContent}
                  onChange={this.handleChangeText}

                  autoSize={{ minRows: 5, minCols: 10 }}
                />

              </div>
              <div>

                <div style={{ display: "flex" }}>
                  <span style={{ lineHeight: '32px' }}>题目类型：</span>
                  <Form.Item >

                    <Select value={this.state.subClassisfy} onChange={(event) => this.handleChangeSelect1(event)}>
                      <Select.Option value="单选">单选</Select.Option>
                      <Select.Option value="多选">多选</Select.Option>
                    </Select>

                  </Form.Item>

                </div>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', top: '7px' }}>选项：</span>
                  {
                    this.state.isRadio ? <SubAlterRadio value={this.props.value} AccptValue={this.AccptValue} /> : <SubAlterCheck value={this.props.value} AccptValue={this.AccptValue} />
                  }
                </div>

              </div>

            </div>
            <Button type="primary"
              shape="round"
              icon={<CheckCircleOutlined />}
              size={size}
              onClick={this.SubAlterSubmit}
            >
              提交修改
        </Button>
            <p style={{ position: 'absolute', right: '96px', bottom: '54px' }}>正确答案：{this.state.rightAnswer}</p>
          </Drawer>

        </div>
      </>
    )
  }
}

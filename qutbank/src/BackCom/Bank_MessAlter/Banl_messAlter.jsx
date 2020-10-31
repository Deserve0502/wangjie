import React, { Component, useState } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
import axios from '../../axios/index'
//import { NavLink,Switch,Route,Redirect } from 'react-router-dom'
import './Banl_messAlter.css'
import {
  Form,
  Input,
  Select,
  Switch,
  Row, Col,Button,Result
} from 'antd';

import { CheckOutlined } from '@ant-design/icons';
export default class backMessAlter extends Component {
  state={
        mes:{},
        mesClass:'',
        mesDiff:'',
        mesName:'',
        mesIntro:'',
        isSwitch:'',
        ID:'',
        size: 'large',
        inSuccess:true,
  }
  alterText1 = React.createRef();

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  componentDidMount(){
    if(this.props.location.query===undefined){
      this.props.history.push( '/backIndex/backMessage/backMessAlter/backMessAlterErr' )
    }else{
        console.log(this.props.location.query.id)
    const url = "/api/data"
    axios.get(url,{ 
      params: { 
         id: this.props.location.query.id,
        
      }
  }).then(response => {
        if (!response) {
            console.log('Loading')
        } else {
          let {mes} = this.state;
          mes = response.data[0];
          this.setState({mes});
           
            this.setState({
              mesClass: mes.classify
            });

         
            this.setState({
              mesDiff: mes.difficulty
            });

            this.setState({
              mesName: mes.name
            });

            this.setState({
              mesIntro: mes.intro
            });
            this.setState({
              ID: mes.id
            });

            if(mes.hot==='是'){
              this.setState({
                isSwitch: true
              });
            }else{
              this.setState({
                isSwitch: false
              });
            }
           
           
        }
    })
    }
  }

handleChangeSelect1=(event)=>{
  this.setState({
    mesClass: event
  });
}
handleChangeSelect2=(event)=>{

  this.setState({
    mesDiff: event
  });

}
handleChangeSwitch=(event)=>{
    let {isSwitch} = this.state;
  this.setState({
    isSwitch: !isSwitch
  });
}
handleChangeText1=(event)=>{

  event.persist();
  this.setState({
    mesName: event.target.value
  });

}
handleChangeText2=(event)=>{
  event.persist();
  this.setState({
    mesIntro: event.target.value
  });
}
submitAlter=()=>{
  
  console.log({
    id:this.state.ID,
    name:this.state.mesName,
    intro:this.state.mesIntro,
    classify:this.state.mesClass,
    difficulty:this.state.mesDiff,
    hot:this.state.isSwitch,
    
  })
  if(this.state.inSuccess===true){
    this.props.history.push( '/backIndex/backMessage/backMessAlter/backMessAlterSucc' )
    
  }
}

  render() {
    let {mes} = this.state;
    let {isSwitch} = this.state;
    const { size } = this.state;
    return (
      <div className='mes_alter'>
        <p style={{ fontSize: '30px', marginBottom: '0.05rem' }}>题库信息修改</p>
        <Row>
        <Col span={18} offset={6}>
        <ul>
        <li>
        <Row>
              <Col span={3} className='col_lin'>题库ID：</Col>
              <Col span={12}><Input value={this.state.ID} disabled/></Col>
            </Row>
        </li>
          <li>
            <Row>
              <Col span={3} className='col_lin'>题库名称：</Col>
              <Col span={12}><Input value={this.state.mesName} onChange={(event)=>this.handleChangeText1(event)} ref={this.alterText1}/></Col>
            </Row>
          </li>
          <li>
            <Row>
              <Col span={3} className='col_lin'>题库介绍：</Col>
              <Col span={12}> <Input value={this.state.mesIntro} onChange={(event)=>this.handleChangeText2(event)}/></Col>
            </Row>

          </li>
          <li >
            <Row>

              <Col span={3} className='col_lin'>题库介绍：</Col>
              <Col span={4}>
                <Form.Item >
               
                  <Select  value={this.state.mesClass} onChange={(event)=>this.handleChangeSelect1(event)}>
                    <Select.Option value="免费">免费</Select.Option>
                    <Select.Option value="会员">会员</Select.Option>
                  </Select>
                  
                </Form.Item>
              </Col>
              <Col span={3} offset={2} className='col_lin'>题库难度：</Col>
              <Col span={4}>
                <Form.Item >

                  <Select value={this.state.mesDiff} onChange={(event)=>this.handleChangeSelect2(event)}>
                    <Select.Option value="简单">简单</Select.Option>
                    <Select.Option value="中等">中等</Select.Option>
                    <Select.Option value="困难">困难</Select.Option>
                  </Select>


                </Form.Item></Col>
            </Row>

          </li>
          <li>
            <Row>
              <Col span={3} className='col_lin'>题库热门:</Col>
              <Form.Item >
                <Switch 
                  checked={isSwitch?true:false}
                  onChange={(event)=>this.handleChangeSwitch(event)}
                />
              </Form.Item>
            </Row>
          </li>
        </ul>
        </Col>
        </Row>
        <Row>
        <Col span={12} offset={10} className='mesAlterSvg'>
        <Button type="primary" shape="round" icon={<CheckOutlined />} size={size} onClick={this.submitAlter}>
          提交修改
        </Button>
        </Col>
        </Row>
      </div>

    )
  }
}

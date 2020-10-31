import React, { Component } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
import axios from '../../axios/index'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, PhoneOutlined, LogoutOutlined, BorderOuterOutlined } from '@ant-design/icons';
import './login_ph.css'
import CoutDownBtn from '../CoutDownBtn/CoutDownBtn'


const NormalLoginForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
}
export default class LoginPh extends Component {
  CodeImg = React.createRef();
  UserTel = React.createRef();
  RandomCode = React.createRef();
  state = {
    imgUrl: null,
    CodeImg: null,
    UserTel: null,
    RandomCode: null,
    imgCur: new Date().getTime(),
    imgPre: '',
    flag: '',
    // flag: true
  }
  componentDidMount() {
    let { imgUrl } = this.state;
    let { imgCur } = this.state;
    let { imgPre } = this.state;
    // imgUrl = 'http://172.20.10.3:5000/passport/image_code?cur_id=' + imgCur + '&pre_id=' + imgPre;

    this.setState({ imgUrl })
    // const url = "http://172.20.10.3:5000/passport/image_code"
    // axios.get(url,{
    //   params:{
    //     cur_id:this.state.imgCur,
    //     pre_id:this.state.imgPre
    //   }
    // }).then(response => {
    //     if (!response) {
    //         console.log('Loading')
    //     } else {
    //        console.log(response.data);
    //        imgUrl = response.data;
    //        this.setState({imgUrl});
    //        console.log(imgUrl);
    //        this.setState({
    //         imgPre:this.state.imgCur
    //        })
    //     }
    // })
  }
  SubmitCode = () => {
    // console.log(this.CodeImg.current.value)

  }
  CodeImgFn = () => {
    let { CodeImg } = this.state;
    CodeImg = this.CodeImg.current.props.value;
    this.setState({ CodeImg });
  }
  UserTelFn = () => {
    let { UserTel } = this.state;
    UserTel = this.UserTel.current.props.value;
    this.setState({ UserTel });
  }
  RandomCodeFn = () => {
    let { RandomCode } = this.state;
    RandomCode = this.RandomCode.current.props.value;
    this.setState({ RandomCode });
  }
  ChangeImg = () => {

    this.setState({
      imgPre: this.state.imgCur,
      imgCur: new Date().getTime(),
      imgUrl: 'http://172.20.10.3:5000/passport/image_code?cur_id=1' + this.state.imgCur + '&pre_id=' + this.state.imgPre
    })
    console.log(this.state.imgCur)
  }
  SubmitPh = (flag) => {
    if (flag === true) {
      this.setState({
        flag :true
      })
    }
  }
  UserSubmit = () => {
    if (this.state.flag === true) {
      console.log(11)
      const url = "http://172.20.10.3:5000/passport/login";
      // const url = "/api/data"
      var params = new URLSearchParams();
      params.append('tel',String(this.state.UserTel));
      params.append('code', String(this.state.RandomCode));
      axios({
        headers:{
          "Content-Type":"application/json"
        },
        method: 'post',
        data:params,
        url:url
      }).then(response => {
        if (!response) {
          console.log('Loading')
        } else {
          console.log(response)
        }
      })
    }
  }

   
  render() {
        let { imgUrl } = this.state;
      return (
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}

        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '请输入您的手机号',
              },
            ]}
          >
            <Input prefix={<PhoneOutlined className="site-form-item-icon" />}
              placeholder="手机号"
              ref={this.UserTel}
              onBlur={this.UserTelFn}
            />
          </Form.Item>
          <div style={{ position: 'relative' }}>
            <div className='CodeImg' onClick={this.ChangeImg}>
              <img src={this.state.imgUrl} alt="" />
            </div>
            <Form.Item
              name="imgcode"
              rules={[
                {
                  required: true,
                  message: '请输入您的图形验证码',
                },
              ]}

            >

              <Input prefix={<BorderOuterOutlined className="site-form-item-icon" />} placeholder="图形验证码" style={{ width: '40%' }}
                ref={this.CodeImg}
                onBlur={this.CodeImgFn}
              />
            </Form.Item>
          </div>
          <div style={{ position: 'relative' }}>
            <CoutDownBtn CodeImg={this.state.CodeImg} UserTel={this.state.UserTel} RandomCode={this.state.RandomCode} imgCur={this.state.imgCur} onClicked={this.SubmitPh}></CoutDownBtn>
            <Form.Item
              name="code"
              rules={[
                {
                  required: true,
                  message: '请输入您的验证码',
                },
              ]}

            >

              <Input prefix={<LogoutOutlined className="site-form-item-icon" />} placeholder="验证码"
                ref={this.RandomCode}
                onBlur={this.RandomCodeFn}
                style={{ width: '40%' }} />

            </Form.Item>
          </div>






          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.UserSubmit}>
              登录
        </Button>

            <p style={{ textAlign: 'center', marginTop: '20px' }}>
              <NavLink to='/login/login-form'>用户名登陆</NavLink>
            </p>
          </Form.Item>

        </Form>
      )
    }
  }
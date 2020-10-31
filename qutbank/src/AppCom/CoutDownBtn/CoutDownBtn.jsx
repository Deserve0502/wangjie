import React, { Component } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
import axios from '../../axios/index'
//import { NavLink,Switch,Route,Redirect } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';
import './CoutDownBtn.css'
export default class CoutDownBtn extends Component {
    state = {
        size: 'large',
        btnDisable: false,
        btnContent: '获取验证码',
        time: 10,
        timeChange: null,
        CodeImgisTrue: null,
    };
    componentDidMount() {
     

    }
    componentWillUnmount() {
        clearInterval(this.state.timeChange)
    }
    render() {

        const { size } = this.state;
        let timeChange;
        let ti = this.state.time;
        const clock = () => {
            let { timeChange } = this.state;
            if (ti > 0) {
                ti = ti - 1;
                this.setState({
                    time: ti,
                    btnContent: ti + 's后可再次获取',
                });

            } else {
                clearInterval(timeChange);
                this.setState({
                    btnDisable: false,
                    time: 10,
                    btnContent: "获取验证码",

                });

            }
        };

        const sendCode = () => {
            let { CodeImgisTrue } = this.state;
            console.log(this.props.imgCur)
            const url = "http://172.20.10.3:5000/passport/code"
            // const url = "/api/data"
            axios.get(url, {
                params: {
                    tel: this.props.UserTel,
                    image_code: this.props.CodeImg,
                    image_id: this.props.imgCur,
                }
            }).then(response => {
                if (!response) {
                    console.log('Loading')
                } else {
                    console.log(response.data.errno);
                       CodeImgisTrue = response.data.errno;
                       this.setState({CodeImgisTrue})
                       console.log(CodeImgisTrue);
                       if (this.state.CodeImgisTrue === "0") {
                        let { timeChange } = this.state;
                        this.setState({
                            btnDisable: true,
                            btnContent: "10s后可再次获取",
                        });
                        timeChange = setInterval(clock, 1000);
                        this.setState({ timeChange });
                        this.props.onClicked(true)
                       
                    } else {
                        alert('图形验证码错误')
                    }

                }
            })

          

        };

        return (
            <div>

                <Button size={size} className='ph_btn ' onClick={sendCode} disabled={this.state.btnDisable} >{this.state.btnContent}</Button>
            </div>
        )
    }
}
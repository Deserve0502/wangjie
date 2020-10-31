
import React, { Component } from 'react';
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
//import axios from 'axios'
import { Link, Switch, Route, Redirect } from 'react-router-dom'

import { Button } from 'antd';
import { Divider } from 'antd';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './AdverFirst.css'
import Login from '../Login_Res/login'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default class Swipe extends Component {

  render() {
    return (
     
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        style={{height:'100%'}}
      >
        <SwiperSlide  style={{backgroundColor:'#3047c7'}}>
        <div >
          {/* <div className='pri-hr'>
            <Divider orientation="center"><span style={{ color: '#8d7d63' }}>乐学</span></Divider>
          </div> */}
          <img src="../ass/QuestionBankImg/adv1.png" alt="" className='AdverImg' />
          <p className='pri-intro' style={{ color: '#01baf0' }}>移动学习,简单便捷</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor:'#0c1639'}}>
        <div>
          {/* <div className='pri-hr'>
            <Divider orientation="center"><span style={{ color: '#fa68a6' }}>乐练</span></Divider>
          </div> */}
          <img src="../ass/QuestionBankImg/adv2.png" alt="" className='AdverImg' />
          <p className='pri-intro' style={{ color: '#fcdccf' }}>优质试题,自主学习</p>  
          </div>
          </SwiperSlide>
        
        <SwiperSlide style={{backgroundColor:'#3b4e5d'}}>
        <div>
          <img src="../ass/QuestionBankImg/adv3.png" alt="" className='AdverImg' />
          <div className='btn-pri'>
            <Link to='/login'>
              <Button type="primary" block className='adv_btn'>欢迎加入我们</Button>
            </Link>
          </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
      
     
    )
  }
}
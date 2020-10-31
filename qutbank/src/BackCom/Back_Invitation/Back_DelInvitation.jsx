import React, { Component } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
import axios from 'axios'
//import { NavLink,Switch,Route,Redirect } from 'react-router-dom'
import { Comment, Tooltip, List,Tag, Divider } from 'antd';
import moment from 'moment';
const data = [
  {

    author: '管理员1',
    avatar: '../ass/QuestionBack/user.JPG',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure), to help people create their product prototypes beautifully and
        efficiently.
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment()
          .subtract(1, 'days')
          .format('YYYY-MM-DD HH:mm:ss')}
      >
        <span>
          {moment()
            .subtract(1, 'days')
            .fromNow()}
        </span>
      </Tooltip>
    ),
  },

];

export default class PostInvitation extends Component {
  state = {
    data: [],
    actions: [<span key="check">查看</span>,
    <span key="del">删除</span>
    ],
  }
  componentDidMount() {
    const url = "/api/DelInvitation"
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
    let { data } = this.state;
    console.log(33)
    return (
      <>

        <List
          className="comment-list"
          header={`${data.length} 条发帖`}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            
         
            
            <li  className='inv_li'>
            {/* 删帖原因：<span></span> */}
              <Comment
               children={<p>删帖原因： <Tag color="red">{item.reason}</Tag></p>}
                actions={this.state.actions}
                author={item.author}
                avatar={item.avatar}
                content={item.content}
               
                datetime={item.datetime}
              
              />
            </li>
          )}
        />
      </>
    )
  }
}
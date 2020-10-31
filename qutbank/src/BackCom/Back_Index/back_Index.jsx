import React,{Component} from 'react'
//import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
//import axios from 'axios'

import { Link,Switch,Route,Redirect,HashRoute,BrowserRouter,withRouter } from 'react-router-dom'
import { Layout, Menu,Breadcrumb,Button } from 'antd';
import BackMessage from '../Back_Message/Back_message'
import backMessAlter from '../Bank_MessAlter/Banl_messAlter'
import backMessNew from '../Back_MessNew/Back_messNew'
import backMessAlterSucc from '../Bank_MessAlter/Back_messAlterSucc'
import backMessNewSucc from '../Back_MessNew/Back_messNewSucc'
import BackEcha from '../Back_echa/Back_echa'
import backMessAlterErr from '../Bank_MessAlter/Back_messAlterErr'

import backSub from '../Back_Subject/Back_subject'
import SubEnterErr from '../Back_Subject/Back_sujEnterErr'
import backSubAlter from '../Back_SubAlter/Back_subAlter'
import BackInvitation from '../Back_Invitation/Back_invitation'
import BackUserInvitation from '../Back_UserInvitation/Back_UserInvation'
import { LeftOutlined } from '@ant-design/icons';
import './antd.min.css'
import './back_Index.css'
import axios from '../../axios/index'
import AnimatedSwitch from '../../../src/AppCom/AnimatedSwitch/AnimatedSwitch'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  CopyOutlined,
  ProfileOutlined
} from '@ant-design/icons';




const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const breadcrumbNameMap = {
  '/backIndex':'首页',
  '/backIndex/backMessage':'题库信息管理',
  '/backIndex/backMessage/backMessAlter':'题库信息修改',
  '/backIndex/backMessNew':'新增题库',
  '/backIndex/backMessNew/backMessNewSucc':'新增题库成功',
  '/backIndex/backMessage/backMessAlter/backMessAlterSucc':'题库信息修改成功',
  '/backIndex/backMessage/backMessAlter/backMessAlterErr':'题库信息修改失败',
  // '/backIndex/backSubIndex':'选择题库',
  '/backIndex/backMessage/backSub':'题目信息',
  '/backIndex/backMessage/SubEnterErr':'进入题库失败',
  '/backIndex/backMessage/backSub/backSubAlter':'修改题目',
  '/backIndex/BackInvitation':'系统帖子',
  '/backIndex/BackUserInvitation':'用户帖子'
}

 class SiderDemo extends Component{
  state = {
    collapsed: false,
    pathSnippets: null,
    extraBreadcrumbItems: null,
    url:''
  };
  
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount(){
    console.log(66)
  }
  componentWillMount(){
    this.getPath();
  }
  getPath = () => {
    // 对路径进行切分，存放到this.state.pathSnippets中

    this.state.pathSnippets = this.props.history.location.pathname.split('/').filter(i => i);

    // let arr=this.state.pathSnippets;
    // let pathname=this.context.router.history.location.pathname;
    //将切分的路径读出来，形成面包屑，存放到this.state.extraBreadcrumbItems
    this.state.extraBreadcrumbItems = this.state.pathSnippets.map((_, index) => {
      // let {url} = this.state;
        let url = `/${this.state.pathSnippets.slice(0, index + 1).join('/')}`;
        // this.setState({url});
        return (
            <Breadcrumb.Item key={url} >
             
              <Link to={url}>
              {breadcrumbNameMap[url]}
              </Link>
              <Breadcrumb.Separator>/</Breadcrumb.Separator>
             </Breadcrumb.Item> 
                
        
        );
    });
    // console.log(this.props.history.location)
   
}

componentWillUpdate(){
  this.getPath();
}
goBack=()=>{
  this.props.history.goBack();
}
  render() {
    // ()=>this.getPath();
    console.log('gengxin')
    return (
     
      <div>
     
      <div className='back_in'>
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>


          <SubMenu key="SubMenu1" icon={<UserOutlined />} title="用户管理">
          <Menu.ItemGroup title="信息">
            <Menu.Item key="setting:1">
         
            用户信息
           
            </Menu.Item>
            <Menu.Item key="setting:2">
         
         角色信息
        
         </Menu.Item>
           
          </Menu.ItemGroup>
          <Menu.ItemGroup title="权限">
            <Menu.Item key="setting:3">角色权限</Menu.Item>
           
          </Menu.ItemGroup>
        </SubMenu>



            <SubMenu key="SubMenu2" icon={<CopyOutlined />} title="题库管理">
          <Menu.ItemGroup title="题库">
            <Menu.Item key="setting:4">
            <Link to='/backIndex/backMessage' onClick={this.getPath}>
            题库信息
            </Link>
            </Menu.Item>
           
          </Menu.ItemGroup>
          
        </SubMenu>


        <SubMenu key="SubMenu3" icon={<ProfileOutlined />} title="论坛管理">
          <Menu.ItemGroup title="帖子">
          <Menu.Item key="setting:5">
          <Link to='/backIndex/BackInvitation'> 
          系统帖子
          </Link>
          
          
    
          </Menu.Item>
            <Menu.Item key="setting:6">
          <Link to='/backIndex/BackUserInvitation'>
          用户帖子
          </Link>
          
      
            </Menu.Item>
         
           
          </Menu.ItemGroup>
       
        </SubMenu>







          </Menu>




        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0,display:'flex',alignItems:'center',position:'relative' }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
            <p style={{textAlign:'center',width:'100%',fontSize:'25px',marginBottom:0,fontWeight:'bold',color:'white', backgroundColor: '#00bfdb '}}>欢迎进入题库后台管理系统</p>
            <div style={{position:'absolute',top:'64px',left:'97px'}}>
          <Breadcrumb separator="">
                  <Breadcrumb.Item>当前位置</Breadcrumb.Item>
                  <Breadcrumb.Separator>:</Breadcrumb.Separator>
                  {this.state.extraBreadcrumbItems}
                </Breadcrumb>
              
          </div>
          <div className='backBtn' onClick={this.goBack}>
                  返回
          </div>
          </Header>
        
          <Content
            className="site-layout-background1"
            style={{
              margin: '24px 16px',
              padding: 20,
              minHeight: 600,
              backgroundColor:'#fff',
              height:'100%',
              overflowY:'auto',
              // paddingBottom: 55,
              boxSizing:'border-box',
           
            }}
          >
          <AnimatedSwitch>
              <Redirect  exact from="/backIndex" to="/backIndex/backEcha"></Redirect> 
              <Route   exact path='/backIndex/backEcha' component={BackEcha} ></Route>
              <Route  exact path='/backIndex/backMessage' component={BackMessage} ></Route>
              <Route  exact path='/backIndex/backMessage/backMessAlter' component={backMessAlter} ></Route>
              <Route  exact path='/backIndex/backMessNew' component={backMessNew} ></Route>
              <Route  exact path='/backIndex/backMessage/backMessAlter/backMessAlterSucc' component={backMessAlterSucc} ></Route>
              <Route  exact path='/backIndex/backMessNew/backMessNewSucc' component={backMessNewSucc} ></Route>
              <Route  exact path='/backIndex/backMessage/backMessAlter/backMessAlterErr' component={backMessAlterErr} ></Route>
              {/* <Route  exact path='/backIndex/backSubIndex' component={backSubIndex} ></Route> */}
              <Route  exact path='/backIndex/backMessage/backSub' component={backSub} ></Route>
              <Route  exact path='/backIndex/backMessage/SubEnterErr' component={SubEnterErr} ></Route>
              <Route  exact path='/backIndex/backMessage/backSub/backSubAlter' component={backSubAlter} ></Route>
              <Route  exact path='/backIndex/BackInvitation' component={BackInvitation} ></Route>
              <Route  exact path='/backIndex/BackUserInvitation' component={BackUserInvitation} ></Route>
              
            
              </AnimatedSwitch>
          </Content>
         
        </Layout>
      </Layout>
      </div>
      </div>
     
      
    );
  }
}
export default withRouter(SiderDemo)
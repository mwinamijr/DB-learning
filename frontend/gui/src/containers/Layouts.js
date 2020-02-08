import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class CustomLayout extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Layout>
        <Header className="header" style={{ background: '#fff', padding: 0 }} >
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">
                <Icon type="home" />
                <span><Link to="/">Home</Link></span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="read" />
                <span><Link to="/courses">Courses</Link></span>
              </Menu.Item>
              {
                this.props.isAuthenticated ?
              <Menu.Item key="2" onClick={this.props.logout}>Logout</Menu.Item>
              :
              <Menu.Item key="3"><Link to="/login/">Login</Link></Menu.Item>
              }
            </Menu>
          </Header>
          </Layout>
        <Layout>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="read" />
                  <span>Courses</span>
                </span>
              }
            >
              <Menu.Item key="1">Maths</Menu.Item>
              <Menu.Item key="2">Chemistry</Menu.Item>
              <Menu.Item key="3">Biology</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="read" />
                  <span>Classes</span>
                </span>
              }
            >
              <Menu.Item key="4">Form One</Menu.Item>
              <Menu.Item key="5">Form Two</Menu.Item>
              <Menu.Item key="6">Form Three</Menu.Item>
              <Menu.Item key="7">Form Four</Menu.Item>
            </SubMenu>
            <Menu.Item key="8">
              <Icon type="play-square" />
              <span>Videos</span>
            </Menu.Item>
            <Menu.Item key="9">
              <Icon type="edit" />
              <span>Exercises</span>
            </Menu.Item>
            <Menu.Item key="10">
              <Icon type="question-circle" />
              <span>FAQ's</span>
            </Menu.Item>
            <Menu.Item key="11">
              <Icon type="file" />
              <span>
                <Link to="/about">About</Link>
                </span>
            </Menu.Item>
          </Menu>
        </Sider>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item><Link to='/'>Home</Link></Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                {this.props.children}
                </div>
          </Content>
        </Layout>
        <Layout>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
      logout: () => dispatch(actions.logout()) 
  }
}

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));
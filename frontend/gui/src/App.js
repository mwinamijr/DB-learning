import React, { Component } from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import { connect } from 'react-redux';
import * as actions from './store/actions/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';

import CustomLayout from './containers/Layouts';

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <CustomLayout>
            <BaseRouter />
          </CustomLayout>
        </Router>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch (
      actions.authCheckstate()
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

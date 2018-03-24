import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../Redux/actions/index';
import './logout.css';

class Logout extends Component {
  componentWillMount() {
    this.props.logout();
  }

  render() {
    return <div>You have logged out.</div>;
  }
}

export default connect(null, { logout })(Logout);

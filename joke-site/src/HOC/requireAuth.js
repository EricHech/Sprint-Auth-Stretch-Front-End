import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ComposedComponent => {
  class RequireAuthentication extends Component {
    componentWillMount() {
      if (!this.props.authed) this.props.history.push('/login');
    }

    render() {
      return <div>{this.props.authed && <ComposedComponent />}</div>
    }
  }

  const mapStateToProps = state => {
    return {
      authed: state.auth.authenticated,
    };
  };

  return connect(mapStateToProps)(RequireAuthentication);
};

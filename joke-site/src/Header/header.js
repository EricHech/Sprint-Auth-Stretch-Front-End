import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkLogin } from '../Redux/actions';
import './header.css';

class Header extends Component {
  componentWillMount() {
    this.props.checkLogin();
  }

  renderHeader = () => {
    if (this.props.authed === true)
      return (
        <div>
          <Link to="/logout">Logout</Link>
        </div>
      );
    else
      return (
        <div>
          <p className="App-intro">
            To get your jokes on, log in. If you don't have an account yet,
            please register!
          </p>
          <div className="button-container">
            <Link className="header-buttons" to="/login">
              Login
            </Link>
            <Link className="header-buttons" to="/register">
              Register
            </Link>
          </div>
        </div>
      );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Dad Joke Central</h1>
        </header>
        {this.renderHeader()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authed: state.auth.authenticated,
  };
};

export default connect(mapStateToProps, { checkLogin })(Header);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './header.css';

class Header extends Component {
renderHeader = () => {
  if(this.props.authed === true) return (<div>Authenticated</div>)
  else return (<div>Not Authenticated</div>)
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Dad Joke Central</h1>
        </header>
        <p className="App-intro">
          To get your jokes on, log in. If you don't have an account yet, please
          register!
        </p>
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

export default connect(mapStateToProps)(Header);
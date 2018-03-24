import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { login } from '../Redux/actions';
import './login.css';

class Login extends Component {
  handleFormSubmit = ({ username, password }) => {
    this.props.login(username, password, this.props.history);
  };

  renderAlert = () => {
    if (this.props.message) return <h3>{this.props.message}</h3>;
  };

  renderHeader = () => {
    if (this.props.authed === true) {
      return (
        <div>
          <div>You're already logged in! Check out your jokes:</div>
          <Link to="/jokes">Jokes</Link>
        </div>
      );
    } else {
      return <div>Login</div>;
    }
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        {this.renderHeader()}
        <form onSubmit={handleSubmit(this.handleFormSubmit)}>
          <fieldset>
            <label>Username:</label>
            <Field name="username" component="input" type="text" />
          </fieldset>
          <fieldset>
            <label>Password:</label>
            <Field name="password" component="input" type="password" />
          </fieldset>
          <button action="submit">Submit</button>
          {this.renderAlert()}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    message: state.auth.message,
    authed: state.auth.authenticated,
  };
};

Login = connect(mapStateToProps, { login })(Login);

export default reduxForm({
  form: 'login',
  fields: ['username', 'password'],
})(Login);

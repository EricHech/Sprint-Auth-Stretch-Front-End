import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { register } from '../Redux/actions';
import './register.css';

class Register extends Component {

  handleFormSubmit = ({ username, password, confirmPassword }) => {
      this.props.register(username, password, confirmPassword, this.props.history);
  };

  renderAlert = () => {
    if (this.props.message) return <h3>{this.props.message}</h3>;
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <div>Register</div>
        <form onSubmit={handleSubmit(this.handleFormSubmit)}>
          <fieldset>
            <label>Username:</label>
            <Field name="username" component="input" type="text" />
          </fieldset>
          <fieldset>
            <label>Password:</label>
            <Field name="password" component="input" type="password" />
          </fieldset>
          <fieldset>
            <label>Confirm Password:</label>
            <Field name="confirmPassword" component="input" type="password" />
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
  };
};

Register = connect(mapStateToProps, { register })(Register);

export default reduxForm({
  form: 'register', // Unique name for the form
  fields: ['username', 'password', 'confirmPassword'],
})(Register);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { registerzzz } from '../Redux/actions';
import './register.css';

class Register extends Component {
  // state = {
  //   error: '',
  // }

  // handleFormSubmit = (username, password, confirmPassword) => {
  //   if (password === confirmPassword) {
  //     this.props.register(username, password, this.props.history);
  //   } else this.setState({ error: 'Passwords do not match' })
  // };
  handleFormSubmit = ({ username, password, confirmPassword }) => {
    this.props.register(username, password, confirmPassword, this.props.history);
  }

  renderAlert = () => {
    if (this.props.error) return <h3>{this.props.error}</h3>;
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <div>Sign Up</div>
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
          <button action="submit">Sign Up</button>
          {this.renderAlert()}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.auth.error,
  };
};

Register = connect(mapStateToProps, { registerzzz })(Register);

export default reduxForm({
  form: 'register',
  fields: ['username', 'password', 'confirmPassword'],
})(Register);

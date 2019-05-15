import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import RegisterForm from '../forms/RegisterForm';
import axios from 'axios';

export class Register extends Component {
  submit = (email, password) => {
    return axios.post('http://localhost:8080/users', { email, password }).then(() => this.props.history.push('/'))
  }
  render() {
    return (
      <div className="container">
        <h2>Register</h2>
        <RegisterForm submit={this.submit} />
      </div>
    )
  }
}

export default Register;

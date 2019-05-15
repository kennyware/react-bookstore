import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';

class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const errors = this.validate(this.state);
        this.setState({errors});
        if(errors.error.length === 0) {
            this.props.submit(this.state.email, this.state.password).catch(err => this.setState({errors: err.response.data}));
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    validate(data) {
        const errors = {error: []};
        if(!validator.isEmail(data.email)) {
            errors.error.push('Email is invalid.');
        }

        if(!validator.isLength(data.password, {min: 8})) {
            errors.error.push('Password must be a at least 8 characters long.');
        }
        return errors;
    }

  render() {
      const { errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
      { errors.error && <span>{errors.error[0]}</span> }
        <div className="form-group">
            <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange.bind(this)} className="form-control" />
        </div>
        <div className="form-group">
            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange.bind(this)} className="form-control" />
        </div>
        <input type="submit" value="Login" />
      </form>
    )
  }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default LoginForm;

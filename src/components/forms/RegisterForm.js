import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class RegisterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            errors: {}
        };
    }
    
    handleSubmit(e){
        e.preventDefault();
        const errors = this.validate(this.state);
        this.setState({errors});
        if(Object.keys(errors).length === 0) {
            this.props.submit(this.state.email, this.state.password).catch(err => this.setState({errors: err.response.data}));
        }
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    validate(data){
        const errors = {};
        if (data.password !== data.confirmPassword) {
            errors.error = 'Passwords do not match.';
        }
        return errors;
    }

  render() {
      const { errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
      { errors.error && <span className="alert-danger text-danger">{errors.error}</span> }
        <div className="form-group">
            <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange.bind(this)} className="form-control" />
        </div>
        <div className="form-group">
            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange.bind(this)} className="form-control" />
        </div>
        <div className="form-group">
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.handleChange.bind(this)} className="form-control" />
        </div>
        <input type="submit" value="Register" />
      </form>
    )
  }
}

RegisterForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default RegisterForm;

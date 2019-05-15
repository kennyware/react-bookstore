import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import LoginForm from '../forms/LoginForm';

class Login extends Component {
    submit = (email, password) => 
        this.props.login(email, password).then(() => this.props.history.push("/"));
    

    render() {
        return (
        <div className="container">
            <h2>Login</h2>
            <LoginForm submit={this.submit} />
        </div>
        )
    }
}

Login.propTypes = { 
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
};

export default connect(null, { login })(Login);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

export class Logout extends Component {
    componentDidMount() {
        this.logout();
    }

    logout = () => 
        this.props.logout().then(() => this.props.history.push("/"));

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

Logout.propTypes = {
    logout: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
};

export default connect(null, {logout})(Logout);

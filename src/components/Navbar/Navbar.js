import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Navbar extends Component {

    constructor() {
      super();

      this.state = {
        loggedIn: false
      };
    }

    componentWillMount() {
      this.setState({loggedIn: this.props.isAuthenticated});
    }

    componentWillReceiveProps() {
      this.setState({loggedIn: this.props.isAuthenticated});
    }

  render() {
    const { loggedIn } = this.state;

    const userLinks = loggedIn ? (
      <ul>
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink exact to="/logout">Logout</NavLink></li>        
      </ul>
    ) : (
      <ul>
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink exact to="/register" activeClassName="active">Register</NavLink></li>
        <li><NavLink exact to="/login" activeClassName="active">Login</NavLink></li>
      </ul>
    )

    return (
      <div className="header">
        <nav>
            <h2 className="branding">Bookstore</h2>
            {userLinks}
        </nav>
      </div>
    )
  }
}

export default Navbar;

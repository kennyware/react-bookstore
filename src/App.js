import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Navbar from './components/Navbar/Navbar';
import Register from './components/pages/Register';
import Logout from './components/pages/Logout';
import BookInfo from './components/pages/BookInfo';
import Checkout from './components/pages/Checkout';
import Loader from './components/misc/Loader';
import Cart from './components/pages/Cart';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    setTimeout(() => { this.setState({loading: false})}, 5000);
  }
  
  render() {
    const { location, isAuthenticated } = this.props;
    if(this.state.loading) {
      return <Loader />;
    }
    return(
      <div className="App container">
        <Navbar isAuthenticated={isAuthenticated}/>
        <div className="body">
        <Route location={location} path='/' component={Home} exact />
        <Route location={location} path='/register' component={Register} exact />
        <Route location={location} path='/login' component={Login} exact />
        <Route location={location} path='/logout' component={Logout} exact />
        <Route location={location} path='/book/:id' component={BookInfo} exact />
        <Route location={location} path='/checkout' render={() => (
          !isAuthenticated ? (
            <Redirect to='/login' />
          ): (
            <Checkout />
          ))} exact />
        <Route location={location} path='/cart' render={() => (
          !isAuthenticated ? (
            <Redirect to='/login' />
          ): (
            <Cart />
          )
        )} exact />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.user.token
});

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default connect(mapStateToProps)(App);

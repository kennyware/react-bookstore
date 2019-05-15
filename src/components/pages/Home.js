import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSingleBook } from '../../actions/bookActions';
import BookList from '../misc/BookList';
import SideMenu from '../misc/SideMenu';

export class Home extends Component {
  select(id) {
    this.props.getSingleBook(id).then(()=> this.props.history.push({pathname: `/book/${id}`}));
  }

  render() {
    return (
      <div id="home" className="container">
        <SideMenu />
        <BookList select={this.select.bind(this)}/>
      </div>
    )
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

export default connect(null, {getSingleBook})(Home);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SingleBook from './SingleBook';
import { connect } from 'react-redux';
import { getBooks } from '../../actions/bookActions';


export class BookList extends Component {
    componentDidMount(){
        this.props.getBooks();
    }

  render() {
    const newBooks = this.props.books.map(book => (
        <SingleBook key={book._id} data={book} select={this.props.select}/>
    ));
    
    return (
      <div className="book-list">
        <div className="row">
            {newBooks}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
      books: state.books.books
})
  
BookList.propTypes = {
    getBooks: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
}

export default connect(mapStateToProps, {getBooks})(BookList);

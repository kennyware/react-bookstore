import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSingleBook } from '../../actions/bookActions';
import { addToCart } from '../../actions/cartActions';

export class BookInfo extends Component {
  static propTypes = {

  }

  constructor() {
      super();

      this.state = {
          book: {}
      }
  }

  componentWillMount() {
    if(Object.keys(this.props.book).length !== 0) {
      this.setState({book: this.props.book});
    } else {
      this.props.getSingleBook(this.props.match.params.id).then(data => this.setState({book: this.props.book}));
    }
  }

  handleClick = (e) => {
    this.props.addToCart(this.props.userId, this.props.book);
  }

  render() {
    const { book } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-5">
            <img src={book.image} className="img-fluid" alt="" />
          </div>
          <div className="col-7 text-center">
            <h2 className="book-title">{book.title}</h2>
            <h4>{book.author}</h4>
            <div dangerouslySetInnerHTML={{ __html: book.description}} />

            <div><strong>Price: {book.price}</strong></div>

            <button onClick={this.handleClick.bind(this)}>Add To Cart</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    book: state.books.book,
    userId: state.user.userId
})

BookInfo.propTypes = {
    book: PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired
}

export default connect(mapStateToProps, { getSingleBook, addToCart })(BookInfo);

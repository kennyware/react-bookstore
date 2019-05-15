import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class SingleBook extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: {}
        }
    }

    componentWillMount(){
        this.setState({
            data: {
                id: this.props.data._id,
                title: this.props.data.title,
                author: this.props.data.author,
                price: this.props.data.price,
                image: this.props.data.image
            }
        });
    }

    handleClick() {
        this.props.select(this.state.data.id);
    }
  render() {
    const { data } = this.state;
    return (
        <div className="col-12 col-md-6 col-lg-3 book-cover">
            <div onClick={this.handleClick.bind(this)} className="book-cover ">
                <img src={data.image} className="img-fluid book-img" alt="book cover" />
                <br />
                <div className="book-header">
                    <span>{data.title}</span>
                    <br />
                    <span> by: {data.author}</span>
                </div>
                {/* <span>{data.price}</span> */}
            </div>
        </div>
    )
  }
}

SingleBook.propTypes = {
    select: PropTypes.func.isRequired
}

export default SingleBook;

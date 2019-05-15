import { GET_BOOKS, GET_SINGLE_BOOK } from '../types';
import axios from 'axios';

export const getBooks = () => dispatch => 
    axios.get('http://localhost:8080/books').then(books => 
        dispatch({
            type: GET_BOOKS,
            books: books.data
        }))

export const getSingleBook = (id) => dispatch => 
    axios.get('http://localhost:8080/books/'+ id).then(book => dispatch({
            type: GET_SINGLE_BOOK,
            book: book.data
        })
    )

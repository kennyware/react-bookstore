import { ADD_TO_CART, GET_CART_ITEMS } from '../types';
import axios from 'axios';

export const addToCart = (userId, item) => dispatch => {
    axios.post(`http://localhost:8080/users/${userId}/cart/add`, {item: item._id}).then(res => {
       dispatch({
        type: ADD_TO_CART,
        item
        });

        return console.log(res);
    })
}

export const getCartItems = (userId) => dispatch =>
    axios.get(`http://localhost:8080/users/${userId}/cart`).then(res => {
        dispatch({
            type: GET_CART_ITEMS,
            items: res.data
        })
        console.log(res.data);
    })
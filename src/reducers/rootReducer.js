import { combineReducers } from 'redux';
import user from './user';
import bookReducer from './bookReducer';
import cartReduceer from './cartReducer';

export default combineReducers({
    user,
    books: bookReducer,
    cart: cartReduceer
});
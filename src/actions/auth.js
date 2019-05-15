import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types';
import api from '../api';

export const loggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
});

export const login = (email, password) => dispatch => api.user.login(email, password).then(user => {
    localStorage.setItem('token', user.token);
    localStorage.setItem('userId', user.userId);
    localStorage.setItem('expires_at', user.expires_at);
    dispatch(loggedIn(user))
});

export const logout = () => dispatch => {
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            localStorage.removeItem('expires_at');
            dispatch({
                type: USER_LOGGED_OUT,
                user: {}
            });
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('done'), 500)
    });
};
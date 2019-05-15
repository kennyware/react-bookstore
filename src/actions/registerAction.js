import { USER_REGISTERED } from "../types";
import api from '../api';

export const register = (email, password) => dispatch => {
    api.user.register(email, password).then(res => {
        dispatch({
            type: USER_REGISTERED,
            response: res
        });
    });
};
import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";
// import { USER_REGISTERED } from "../types";

const initialState = {

};

export default (state = initialState, action = {}) => {
  switch (action.type) {

  case USER_LOGGED_IN:
    return action.user;
  
  case USER_LOGGED_OUT:
    return action.user;

  default:
    return state;
  }
}
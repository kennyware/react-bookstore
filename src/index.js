import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loggedIn, logout } from './actions/auth';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { StripeProvider } from 'react-stripe-elements';
import axios from 'axios';

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));

if(localStorage.token) {
    const tokenExp = new Date(localStorage.expires_at).getTime();
    const now = new Date().getTime();

    if(tokenExp > now) {
        const user = { token: localStorage.token, userId: localStorage.userId };
        store.dispatch(loggedIn(user));
        axios.defaults.headers['Authorization'] = 'Bearer ' + user.token;
    } else {
        store.dispatch(logout());
    }
    
}

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <StripeProvider apiKey="pk_test_JfeHi8KHE8HDbEGCyMCpjP1c">
                <Route component={App} />
            </StripeProvider>
        </Provider>
    </BrowserRouter>, 
    document.getElementById('root'));
registerServiceWorker();

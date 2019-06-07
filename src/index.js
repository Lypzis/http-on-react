import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// Axios request interceptor
const requestInterceptor = axios.interceptors.request.use(request => {
    console.log(request);

    // Edit request config, e.g.: headers.
    return request;
}, err => { // This second part handles errors
    console.log(err);

    return Promise.reject(err);
});

const responseIntercetor = axios.interceptors.response.use(response => {
    console.log(response);

    // Edit response config, e.g.: headers.
    return response;
}, err => { // This second part handles errors
    console.log(err);

    return Promise.reject(err);
});

/* will get rid of the interceptors: 
    axios.interceptors.request.eject(requestInterceptor);
    axios.interceptors.request.eject(responseInterceptor);
*/
ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();

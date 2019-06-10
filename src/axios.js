import axios from  'axios';

// A file just for setting up axios :D
// Creates an Axios instance
const instance = axios.create({
    // Global default base URL, now to referece, all that will be needed 
    // is the last part of the URL when making requests
    // e.g.: 'https://jsonplaceholder.typicode.com/posts' ==> '/posts'
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTACE';
instance.defaults.headers.post['Content-Type'] = 'application/json';

// Axios request interceptor
// const requestInterceptor = 
/*
instance.interceptors.request.use(request => {
    console.log(request);

    // Edit request config, e.g.: headers.
    return request;
}, err => { // This second part handles errors
    console.log(err);

    return Promise.reject(err);
});

// const responseIntercetor = 

instance.interceptors.response.use(response => {
    console.log(response);

    // Edit response config, e.g.: headers.
    return response;
}, err => { // This second part handles errors
    console.log(err);

    return Promise.reject(err);
});

    will get rid of the interceptors: 
    instance.interceptors.request.eject(requestInterceptor);
    instance.interceptors.request.eject(responseInterceptor);
*/

export default instance;
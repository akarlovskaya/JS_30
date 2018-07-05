/* jshint esversion: 6 */
/**
*   Easy HTTP Library
*   for making HTTP requests
*
*   @version 2.0.0
*   @author Anna Karlovskaya
*   based on Udemy Course (https://www.udemy.com/modern-javascript-from-the-beginning)
*   @license MIT
*
**/

// create EasyHttp object
class EasyHTTP {
    // Make an HTTP GET Request
    get(url) {
        return fetch(url) // returns Promise
            .then(errorHandler) // error handling (like 404/500)
            .then(response => (response.json()))
            .then(data => data)
            .catch(err => err);
    }

    // Make an HTTP POST Request
    post(url, data){
        return fetch(url, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(errorHandler) // error handling (like 404/500)
        .then(response => (response.json()))
        .then(data => data)
        .catch(err => err);
    }

    // Make an HTTP PUT Request
    update(url, data, userId){
        let urlTarget = `${url}/${userId}`;
        return fetch(urlTarget, {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(errorHandler) // error handling (like 404/500)
        .then(response => (response.json()))
        .then(data => data)
        .catch(err => err);
    }

    // Make an HTTP DELETE Request
    deleteData(url){
        return fetch(url, {
            method: 'DELETE',
            headers: {'Content-type': 'application/json'}
        })
        .then(errorHandler) // error handling (like 404/500)
        .then(response => (response.json()))
        .then(() => 'Resource deleted')
        .catch(err => err);
    }
}

function errorHandler(response){
    if ( response.ok ) {
        return response;
    }
    throw Error('Network response was not ok.', response.statusText);
}

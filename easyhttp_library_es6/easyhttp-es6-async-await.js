/* jshint esversion: 6 */
/**
*   Easy HTTP Library
*   for making HTTP requests
*
*   @version 3.0.0
*   @author Anna Karlovskaya
*   based on Udemy Course (https://www.udemy.com/modern-javascript-from-the-beginning)
*   @license MIT
*
**/

// create EasyHttp object
class EasyHTTP {
    // Make an HTTP GET Request
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    // Make an HTTP POST Request
    async post(url, data){
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(data)
        });

        const resData = await response.json();
        return resData;
    }

    // Make an HTTP PUT Request
    async update(url, data, userId){
        let urlTarget = `${url}/${userId}`;
        const response = await fetch(urlTarget, {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(data)
        });

        const resData = await response.json();
        return resData;
    }

    // Make an HTTP DELETE Request
    async deleteData(url){
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {'Content-type': 'application/json'}
        });

        const resData = await 'Resource deleted';
        return resData;
    }
}

function errorHandler(response){
    if ( response.ok ) {
        return response;
    }
    throw Error('Network response was not ok.', response.statusText);
}

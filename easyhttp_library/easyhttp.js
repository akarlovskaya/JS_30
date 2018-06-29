/*====
Make an HTTP GET Request
=====*/
// create function constructor
function EasyHTTP() {
    this.http = new XMLHttpRequest();
}

// add get method to prototype with passing a user url param
EasyHTTP.prototype.get = function (url, callback) {
    this.http.open('GET', url, true);
    // define "self" variable to get it from .onload function scope, overwise getting "undefined"
    var self = this;
    this.http.onload = function() {
        if (self.http.status === 200) {
            // if ok - show just response
            callback(null, self.http.responseText);
        } else {
            // if error, show just first param - error
            callback('Error: ' + self.http.status);
        }
    };
    this.http.send();
};

// Make an HTTP POST Request

// Make an HTTP PUT Request

// Make an HTTP DELETE Request

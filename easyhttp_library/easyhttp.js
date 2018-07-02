// create function constructor
function EasyHTTP() {
    this.http = new XMLHttpRequest();
}
// add methods to prototype passing a user params

// Make an HTTP GET Request
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
EasyHTTP.prototype.post = function (url, data, callback) {
    // initialize a new request to post data
    this.http.open('POST', url, true);
    // Set content type in Http Header
    this.http.setRequestHeader('Content-type', 'application/json');

    var self = this;
    this.http.onload = function() {
        // get new post or error
        callback(null, self.http.responseText);
    };
    // send the request as string to server
    this.http.send(JSON.stringify(data));
};

// Make an HTTP PUT Request
EasyHTTP.prototype.put = function(url, data, callback){
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    var self = this;
    this.http.onload = function(){
        callback(null, self.http.responseText);
    };
    this.http.send(JSON.stringify(data));
};

// Make an HTTP DELETE Request
EasyHTTP.prototype.delete = function(url, callback){
    this.http.open('DELETE', url, true);
    this.http.onload = function(){
        callback(null, 'Post deleted');
    };

    this.http.send();
};

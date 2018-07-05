/* jshint esversion: 6 */
const BTN_1 = document.getElementById('button1');
const BTN_2 = document.getElementById('button2');
const BTN_3 = document.getElementById('button3');
const TEXT_OUTPUT_EL = document.getElementById('output-text');
const JSON_OUTPUT_EL = document.getElementById('output-json');
const APIDATA_OUTPUT_EL = document.getElementById('output-api-data');

// Event Listeners
BTN_1.addEventListener('click', getText);
BTN_2.addEventListener('click', getJson);
BTN_3.addEventListener('click', getExternal);

// Get and output data from TEXT file
function getText() {
    // call fetch() method with 'test.txt; file as parameter to get it
    fetch('test.txt') // fetch responses with Promise object
        .then(errorHandler) // error handling (like 404/500)
        .then(response => response.text()) // Transform the data into text
        .then((data) => { // when get data, output it
            TEXT_OUTPUT_EL.innerHTML = data;
            JSON_OUTPUT_EL.innerHTML = '';
            APIDATA_OUTPUT_EL.innerHTML = '';
        })
        //fetch() will only reject a promise if the user is offline, or some unlikely networking error occurs, such a DNS lookup failure.
        .catch(err => console.error(err)); // Fetch rejects if it's unable to give a response due to an error, but a 500/404 response isn't that.
    }
// Get local JSON from localhost
function getJson(){
    fetch('posts.json') // tell what to fetch
        .then(function(response){ // here we get Promise object <pending> as response
            return response.json(); // transform response to json
        })
        .then(data => { // here we get data (Array)
            let output = '';

            data.forEach(function(post){
                output += `<li>${post.title}</li>`;
            });
            JSON_OUTPUT_EL.innerHTML = output;
            TEXT_OUTPUT_EL.innerHTML = '';
            APIDATA_OUTPUT_EL.innerHTML = '';
        })
        .catch(err => console.error(err));
}

// Get GIT users from GIT API
function getExternal(){
    fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(data => {
            let output = '';

            data.forEach(function(user, index){
                output += `<li>${data[index].login}</li>`;
            });
            APIDATA_OUTPUT_EL.innerHTML = output;
            TEXT_OUTPUT_EL.innerHTML = '';
            JSON_OUTPUT_EL.innerHTML = '';
        })
        .catch(err => console.error(err));
}

// Generic Error handling function
function errorHandler(response){
    if ( !response.ok ) {
        throw Error(response.statusText);
    }
    return response;
}

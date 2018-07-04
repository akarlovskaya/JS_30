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

// Get and output data from text file
function getText() {
    // call fetch() method with 'test.txt; file as parameter to get it
    fetch('test.txt') // fetch responses Promise object
        // call then() method to get data
        .then(
            // Transform the data into text
            function(response) {
                return response.text();
            })
        // get data
        .then(function(data){
            TEXT_OUTPUT_EL.innerHTML = data;
            JSON_OUTPUT_EL.innerHTML = '';
            APIDATA_OUTPUT_EL.innerHTML = '';
        })
        .catch(function(err){
            console.log(err);
        });
}
// Get local Json from localhost
function getJson(){
    fetch('posts.json') // tell what to fetch
        .then(function(response){ // here we get Promise object <pending> as response
            return (response.json()); // transform response to json and
        })
        .then(function(data){ // here we get data (Array)
            let output = '';

            data.forEach(function(post){
                output += `<li>${post.title}</li>`;
            });
            JSON_OUTPUT_EL.innerHTML = output;
            TEXT_OUTPUT_EL.innerHTML = '';
            APIDATA_OUTPUT_EL.innerHTML = '';
        })
        .catch(function(err){
            console.log('Error: ', err);
        });
}

// Get GIT users from GIT API
function getExternal(){
    fetch('https://api.github.com/users')
        .then(response => {
            return response.json();
        })
        .then(function(data){
            let output = '';

            data.forEach(function(user, index){
                output += `<li>${data[index].login}</li>`;
            });
            APIDATA_OUTPUT_EL.innerHTML = output;
            TEXT_OUTPUT_EL.innerHTML = '';
            JSON_OUTPUT_EL.innerHTML = '';
        })
        .catch(function(err){
            console.error('Error: ', err);
        });
}

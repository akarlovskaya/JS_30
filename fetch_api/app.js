/* jshint esversion: 6 */
const BTN_1 = document.getElementById('button1');
const BTN_2 = document.getElementById('button2');
const BTN_3 = document.getElementById('button3');
const TEXT_OUTPUT_EL = document.getElementById('output-text');
const JSON_OUTPUT_EL = document.getElementById('output-json');
const APIDATA_OUTPUT_EL = document.getElementById('output-api-data');

// Event Listeners
BTN_1.addEventListener('click', getText);
// Get and output data from text
function getText() {
    // call fetch() method with 'test.txt; file as parameter to get it
    fetch('test.txt')
        // call then() method to get data
        .then(
            // Transform the data into text
            function(response) {
                return response.text();
            })
        .then(function(data){
            console.log(data.text());
        });
}
// getText();

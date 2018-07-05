/* jshint esversion: 6 */
let myHttp = new EasyHTTP();

// Make GET request
myHttp.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log(err));

// Make POST request
let newUser = {
    name: 'Jeff Thomas',
    username: 'Jf',
    email: 'jf@mymail.com'
};

myHttp.post('https://jsonplaceholder.typicode.com/users', newUser)
    .then(data => console.log(data))
    .catch(err => console.log(err));

// Make PUT request
let userInfoForUpdate = {
    name: 'Sally Freeman',
    username: 'Sfree',
    email: 'sfree@mymail.com'
};
// Allow to enter as parameters URL, what User to update (by ID) and what data
myHttp.update('https://jsonplaceholder.typicode.com/users', userInfoForUpdate, 1)
    .then(data => console.log(data))
    .catch(err => console.log(err));

//  Make DELETE request
myHttp.deleteData('https://jsonplaceholder.typicode.com/users/1')
    .then(data => console.log(data))
    .catch(err => console.log(err));

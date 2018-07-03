/* jshint esversion: 6 */
const posts = [
    { title: 'Post One', body: 'This is post One' },
    { title: 'Post Two', body: 'This is post Two' }
];

// Get and output posts from a 'server' with some delay using setTimeout()
function getPosts(){
    setTimeout(() => {
        let output = '';
        const UL_EL = document.getElementById('posts');

        posts.forEach((post) => {
            output += `
                <li>${post.title}</li>
            `;
        });
        UL_EL.innerHTML = output;
    }, 1000);
}

/*====
With Promises
=====*/
// Add a new post
function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const ERROR = false;

            if (!ERROR) {
                resolve();
            } else {
                reject('Error: something went wrong');
            }
        }, 2000);
    });
}
// createPost({ title: 'Post Three', body: 'This is post Three' })
//     .then(getPosts)
//     .catch(err => console.error(err));

// Aggregating the results of multiple promises
// const promise1 = Promise.resolve('Hello');
// const promise2 = 3;
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));
// Promise.all([promise1, promise2, promise3]).then(value => console.log(value));

/*====
With Async/Await
=====*/
async function asyncFunc(){
    await createPost({ title: 'Post Three', body: 'This is post Three' });
    getPosts();
}
asyncFunc();

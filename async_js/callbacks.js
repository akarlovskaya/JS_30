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

// Add a new post
function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({ title: 'Post Three', body: 'This is post Three' }, getPosts);

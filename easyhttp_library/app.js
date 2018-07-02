var myHttp = new EasyHTTP();
// GET One post from server
myHttp.get('https://jsonplaceholder.typicode.com/posts/1',
                function(error, response){
                    if (error) {
                        console.error(error);
                    } else {
                        console.log(response);
                    }
                }
            );
// Create data
var data = {
    'title': 'My Title',
    'body': 'My post body'
};
// POST a new post
myHttp.post('https://jsonplaceholder.typicode.com/posts', data, function(error, post){
                if (error) {
                    console.error(error);
                } else {
                    console.log(post);
                }
            });

// PUT (update) a post
var updatedData = {
    'title': 'My New Title',
    'body': 'My new post body'
};
myHttp.put('https://jsonplaceholder.typicode.com/posts/1', updatedData, function(error, response){
                if (error) {
                    console.error(error);
                } else {
                    console.log(response);
                }
            });

// DELETE a post
myHttp.delete('https://jsonplaceholder.typicode.com/posts/1', function(error, response){
                if (error) {
                    console.error(error);
                } else {
                    console.log(response);
                }
            });

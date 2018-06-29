var myHttp = new EasyHTTP();

myHttp.get('https://jsonplaceholder.typicode.com/posts/1',
            function(error, response){
                if (error) {
                    console.error(error);
                } else {
                    console.log(response);
                }

            }
        );

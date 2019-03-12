const http = new EasyHTTP;
// http.get('https://jsonplaceholder.typicode.com/posts')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

const data ={
    userId: 'John Doe',
    username: 'jd',
    email: 'jd@gmail'
}

http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));
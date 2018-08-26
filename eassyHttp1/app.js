const http = new EasyHTTP();

//get users
// http
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// user data 
 const data = {
     name : 'John Doe',
     username : 'johndoe',
     email : 'jdoe@gmail.com'
 }

// //  create post 
//  http.post('https://jsonplaceholder.typicode.com/users',data)
//      .then(data => console.log(data))
//      .catch(err => console.log(err))

// put
 http.put('https://jsonplaceholder.typicode.com/users/2',data)
     .then(data => console.log(data))
     .catch(err => console.log(err))

//delete
//  http.delete('https://jsonplaceholder.typicode.com/users/2')
//      .then(data => console.log(data))
//      .catch(err => console.log(err))

// async function  getUsers() {
//     //await response of the fetch call
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     //only proceed once its resolved
//     const data = await response.json();
//     //only proceed once second promise is resolved
//     return data;
// }

// getUsers().then(users => console.log(users))
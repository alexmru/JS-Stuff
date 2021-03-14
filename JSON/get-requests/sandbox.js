
// Old Method!!

// const getTodos = (resource) => {
//     const request = new XMLHttpRequest();

//     return new Promise((resolve, reject) => {
//         request.addEventListener('readystatechange', () => {
//             // console.log(request, request.readyState);
//             if (request.readyState === 4 && request.status === 200) {
//                 const data = JSON.parse(request.responseText);
//                 resolve(data)
//             }else if (request.readyState === 4) {
//                 reject('error getting resource')
//             }
//         })
        
//         request.open('GET', resource);
//         request.send();
//     })

    
// };

// getTodos("https://jsonplaceholder.typicode.com/todos").then((data) => {
//     console.log("Promise was resolved :", data);
// }).catch(err => {
//     console.log("Promise was rejected", err)
// })


// New Method !

// fetch('https://jsonplaceholder.typicode.com/todos').then((response) => {
//     console.log("resolved!", response);
//     console.log(response.status);
//     return response.json();
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log("rejected!", err);
// });

const getTodos = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();

    if (response.status !== 200) {
        throw new Error("cannot fetch the data")
    }

    return data;
}

getTodos()
.then(data => console.log("resolved :", data))
.catch(err => console.log("rejected", err.message));


let token = locataion.hash.split('=')[1];
let path =  'localhost:27036';
fetch(path, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token })
})
    .then(data => console.log(data))
    .catch(error => console.log(error));
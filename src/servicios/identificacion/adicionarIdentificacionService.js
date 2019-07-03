var url = 'http://localhost:8080/identificacion/';

var adicionarIdentificacionService = (data) => {
fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
        'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
    }

export default adicionarIdentificacionService;
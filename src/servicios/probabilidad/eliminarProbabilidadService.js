var url = 'http://localhost:8080/probabilidad/';

var eliminarIdentificacionService = (data) => {
fetch(url+data, {
        method: 'DELETE', // or 'PUT'
        headers:{
        'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
    }

export default eliminarIdentificacionService;
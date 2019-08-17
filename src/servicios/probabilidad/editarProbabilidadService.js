var url = 'http://localhost:8080/probabilidad/';

var editarProbabilidadService = async (data) => {
const response = await fetch(url, {
        method: 'PUT', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
        'Content-Type': 'application/json'
        }
    });

    return response;
}

export default editarProbabilidadService;
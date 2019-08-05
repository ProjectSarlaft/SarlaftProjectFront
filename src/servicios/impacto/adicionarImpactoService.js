var url = 'http://localhost:8080/impacto/';

var adicionarProbabilidadService = async (data) => {
const response = await  fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
        'Content-Type': 'application/json'
        }
    });
        const json = await response.json();
        return json;
}

export default adicionarProbabilidadService;
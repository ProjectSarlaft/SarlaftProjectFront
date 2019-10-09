var url = 'http://localhost:8080/riesgoEscala';

var eliminarRiesgoEscalaService = async (data) => {
const response = await fetch(url, {
        method: 'DELETE',
        body: JSON.stringify({riesgoEscalaId : data[0]}),
        headers:{
        'Content-Type': 'application/json'
        }
    });
    return response;
    }

export default eliminarRiesgoEscalaService;
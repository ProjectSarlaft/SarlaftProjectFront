var url = 'http://localhost:8080/probabilidad/';

var eliminarIdentificacionService = async (data) => {
const response = await fetch(url+data, {
        method: 'DELETE', // or 'PUT'
        headers:{
        'Content-Type': 'application/json'
        }
    })
    return response;    
}

export default eliminarIdentificacionService;
var url = 'http://localhost:8080/riesgoEscala';

const obtenerInformacionEscalaRiesgo = async () => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}


export default obtenerInformacionEscalaRiesgo;
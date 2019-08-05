var url = 'http://localhost:8080/riesgo';

const obtenerInformacionMatrizRiesgo = async () => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

export default obtenerInformacionMatrizRiesgo;
import crearFilaTablaProbabilidad from './crearFilaTablaProbabilidad';

var url = 'http://localhost:8080/probabilidad';

const obtenerInformacionProbabilidadService = async () => {
    const response = await fetch(url);
    const json = await response.json();
    if(json.length === 0) {
        return [crearFilaTablaProbabilidad, crearFilaTablaProbabilidad, crearFilaTablaProbabilidad];
    }
    return json;
}

export default obtenerInformacionProbabilidadService;
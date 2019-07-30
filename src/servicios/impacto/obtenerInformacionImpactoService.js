import crearFilaTablaImpacto from './crearFilaTablaImpacto';

var url = 'http://localhost:8080/impacto';

const obtenerInformacionImpactoService = async () => {
    const response = await fetch(url);
    const json = await response.json();
    if(json.length === 0) {
        return [crearFilaTablaImpacto, crearFilaTablaImpacto, crearFilaTablaImpacto];
    }
    return json;
}

export default obtenerInformacionImpactoService;
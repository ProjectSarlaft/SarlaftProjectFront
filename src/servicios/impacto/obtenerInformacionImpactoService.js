import crearFilaTablaImpacto from './crearFilaTablaImpacto';

var url = 'http://localhost:8080/impacto';

const obtenerInformacionImpactoService = async () => {
    const response = await fetch(url);
    const json = await response.json();

    // Si el llamado a la BD no me retorna info, deberé colocar 3 filas como default.
    if(json.length === 0) {
        return [crearFilaTablaImpacto, crearFilaTablaImpacto, crearFilaTablaImpacto];
    }
    return json;
}

export default obtenerInformacionImpactoService;
import validarDatoNumerico from '../transversales/validarDatoNumerico';

const validacionTablaImpacto = (tablaImpacto) => {
    const camposFaltantes= [];
    tablaImpacto.map((fila) => {
        
        if(fila.escala === "") {
            camposFaltantes.push("Escala")
        }

        validarDatoNumerico(fila.nivel, camposFaltantes);

        if(fila.afectacionEconomica === "") {
            camposFaltantes.push("Afectacion Economica")
        }

    });

    let camposFaltantesSinRepetir = [...new Set(camposFaltantes)];

    return camposFaltantesSinRepetir;
    }

export default validacionTablaImpacto;
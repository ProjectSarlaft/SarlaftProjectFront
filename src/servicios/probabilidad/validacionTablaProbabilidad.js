import validarDatoNumerico from '../transversales/validarDatoNumerico';

const validacionTablaProbabilidad = (tablaImpacto) => {
    const camposFaltantes= [];
    tablaImpacto.map((fila) => {
        
        if(fila.escala === "") {
            camposFaltantes.push("Escala")
        }

        validarDatoNumerico(fila.nivel, camposFaltantes);
    
        if(fila.posibilidadAnual === "") {
            camposFaltantes.push("Posibilidad Anual")
        }

    });

    let camposFaltantesSinRepetir = [...new Set(camposFaltantes)];

    return camposFaltantesSinRepetir;
    }

export default validacionTablaProbabilidad;
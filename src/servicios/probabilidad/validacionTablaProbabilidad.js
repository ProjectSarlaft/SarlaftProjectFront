const validacionTablaProbabilidad = (tablaImpacto) => {
    const camposFaltantes= [];
    tablaImpacto.map((fila) => {
        
        if(fila.escala === "") {
            camposFaltantes.push("Escala")
        }

        if(fila.nivel === "") {
            camposFaltantes.push("Nivel")
        }

        if(fila.posibilidadAnual === "") {
            camposFaltantes.push("Posibilidad Anual")
        }

    });

    let camposFaltantesSinRepetir = [...new Set(camposFaltantes)];

    return camposFaltantesSinRepetir;
    }

export default validacionTablaProbabilidad;
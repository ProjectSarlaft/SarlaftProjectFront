const validacionTablaImpacto = (tablaImpacto) => {
    const camposFaltantes= [];
    tablaImpacto.map((fila) => {
        
        if(fila.escala === "") {
            camposFaltantes.push("Escala")
        }

        if(fila.nivel === "") {
            camposFaltantes.push("Nivel")
        }

        if(fila.afectacionEconomica === "") {
            camposFaltantes.push("Afectacion Economica")
        }

    });

    let camposFaltantesSinRepetir = [...new Set(camposFaltantes)];

    return camposFaltantesSinRepetir;
    }

export default validacionTablaImpacto;
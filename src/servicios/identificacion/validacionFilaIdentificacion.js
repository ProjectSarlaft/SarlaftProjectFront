const validacionFilaIdentificacion = (filaIdentification) => {
    const camposFaltantes=[];
    
    // Campo Riesgo es Requerido
    if(filaIdentification.riesgo === "") {
        camposFaltantes.push("Riesgo");
    }

    // Campo Descripcion es Requerido
    if(filaIdentification.descripcion === "") {
        camposFaltantes.push("Descripcion");
    }

    // Campo Proceso es Requerido
    if(filaIdentification.proceso === "") {
        camposFaltantes.push("Proceso");
    }


    // Almenos un campo del checkbox debe estar lleno
    if (filaIdentification.riesgoLegal === false &&
        filaIdentification.riesgoOperativo === false &&
        filaIdentification.riesgoContagio === false && 
        filaIdentification.riesgoReputacional === false) {
            camposFaltantes.push("Riesgos Asociados");
        }

    // Almenos un campo del checkbox debe estar lleno
    if (filaIdentification.riesgoProductos === false &&
        filaIdentification.riesgoDistribucion === false &&
        filaIdentification.riesgoJurisdiccion === false && 
        filaIdentification.riesgoCliente === false) {
            camposFaltantes.push("Factores de Riesgo");
        }

    return camposFaltantes;
}

export default validacionFilaIdentificacion;
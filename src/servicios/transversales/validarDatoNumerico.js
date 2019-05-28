const validarDatoNumerico = (numero, mensajeRetorno) => {
    debugger
    if(numero === "") {
        mensajeRetorno.push("Nivel");
        return mensajeRetorno;
    }

    if (numero.includes(",") || numero.includes(".")) {
        mensajeRetorno.push("Nivel debe ser Entero");
        return mensajeRetorno;
    }

    if (numero < 0 ) {
        mensajeRetorno.push("Nivel debe ser positivo");
        return mensajeRetorno;
    }
    

}

export default validarDatoNumerico;
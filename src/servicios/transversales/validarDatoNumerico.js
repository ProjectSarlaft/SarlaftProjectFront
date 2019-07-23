const validarDatoNumerico = (numero, mensajeRetorno) => {
    if(numero === "") {
        mensajeRetorno.push("Nivel");
        return mensajeRetorno;
    }

    if (numero.includes(",") || numero.includes(".")) {
        mensajeRetorno.push("Nivel debe ser Entero");
        return mensajeRetorno;
    }

    if (numero < 1 || numero > 5) {
        mensajeRetorno.push("Nivel debe estar entre el rango 1-5");
        return mensajeRetorno;
    }
    

}

export default validarDatoNumerico;
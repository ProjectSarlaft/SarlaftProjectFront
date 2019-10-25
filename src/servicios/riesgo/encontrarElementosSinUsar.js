const opcionesColores = ['#2196f3', '#76ff03','#ffeb3b','#ff9800','#f44336'];
const opcionesRiesgoEscala = ['Muy Bajo', 'Bajo', 'Medio', 'Alto', 'Muy Alto'];

function encontrarElementosSinUsar(informacion) {
    const coloresSinUsar = opcionesColores.filter(color => !informacion.some(riesgoEscala => riesgoEscala.color == color));
    const escalasSinUsar = opcionesRiesgoEscala.filter(escala => !informacion.some(riesgoEscala => riesgoEscala.escala == escala));

    return {
      coloresSinUsar: coloresSinUsar,
      escalasSinUsar: escalasSinUsar
    };
  }

export default encontrarElementosSinUsar;
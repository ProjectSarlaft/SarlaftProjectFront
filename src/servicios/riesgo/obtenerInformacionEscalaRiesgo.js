var url = 'http://localhost:8080/escalaRiesgo';

const obtenerInformacionEscalaRiesgo = () => {/*async () => {
    const response = await fetch(url);
    const json = await response.json();
    return json;*/

    // Mock info
       return [
            {
                riesgoEscala:
                    {
                        escala:"Bajo",
                        accion: "Nada",
                        color:"#8bc34a"
                    }
            },
            {        
                riesgoEscala:
                        {
                            escala:"Medio",
                            accion: "Asaroso",
                            color:  "#cddc39"
                        }      
            },
            {
                riesgoEscala:
                        {
                            escala:"Alto",
                            accion: "Run",
                            color:"#ffc107"
                        }      
            }
       ];
    };


export default obtenerInformacionEscalaRiesgo;
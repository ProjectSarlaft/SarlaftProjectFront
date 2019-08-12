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
                        escala:"Muy Bajo",
                        accion: "Nada",
                        color:"#8bc34a"
                    }
            },
            {        
                riesgoEscala:
                        {
                            escala:"Bajo",
                            accion: "Asaroso",
                            color:  "#ffeb3b"
                        }      
            },
            {
                riesgoEscala:
                        {
                            escala:"Medio",
                            accion: "Run",
                            color:"#ffc107"
                        }      
            }
       ];
    };


export default obtenerInformacionEscalaRiesgo;
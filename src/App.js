import React, { Component } from 'react'; import { Row, Col } from 'react-flexbox-grid';
import Riesgo from './componentes/Riesgo';
import RiesgosAsociados from './componentes/RiesgosAsociados';
import FactoresRiesgo from './componentes/FactoresRiesgo';

class App extends Component {
  render() {
    return (
      <div>
        Sarlaft Project

          <Row>
            <Col  md={3} lg={3} ><Riesgo riesgo = "riesgo1" proceso = "proceso1" descripcion = "descripcion1" ></Riesgo></Col>
            <Col  md={4} lg={4} ><RiesgosAsociados riesgoLegal = "r.Legal" riesgoOperativo = "r.Operativo" riesgoContagio = "r.Contagio" 
                                  riesgoReputacional = "r.Reputacional"></RiesgosAsociados></Col>
            <Col  md={4} lg={4} ><FactoresRiesgo riesgoCliente = "r.Cliente" riesgoProductos = "r.Productos" riesgoDistribucion = "r.Distribucion" 
                                  riesgoJurisdiccion = "r.Jurisdiccion"></FactoresRiesgo></Col>                     
          </Row>
      </div>
    );
  }
}
export default App;



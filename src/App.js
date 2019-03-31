import React, { Component } from 'react'; import { Grid, Row, Col } from 'react-flexbox-grid';
import Riesgo from './componentes/Riesgo';

class App extends Component {
  render() {
    return (
      <div>
        Sarlaft Project

        <Row>
  <Col  md={3} lg={3} ><Riesgo riesgo = "riesgo1" proceso = "proceso1" descripcion = "descripcion1" ></Riesgo></Col>
  <Col  md={3} lg={3} ><Riesgo></Riesgo></Col>
  <Col md={3} lg={3} ><Riesgo></Riesgo></Col>
</Row>
      </div>
    
    );
  }
}

export default App;

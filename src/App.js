import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TablaIdentificacion from './componentes/identification/TablaIdentificacion';

const tablaIdentificacion = [{
  riesgo: "riesgo1",
  descripcion: "riesgo1",
  proceso: "riesgo1",
  riesgoLegal: "riesgo1",
  riesgoOperativo: "riesgo1",
  riesgoContagio: "riesgo1",
  riesgoReputacional: "riesgo1",
  riesgoCliente: "riesgo1",
  riesgoProductos: "riesgo1",
  riesgoDistribucion: "riesgo1",
  riesgoJurisdiccion: "riesgo1",

}, {

  riesgo: "riesgo2",
  descripcion: "riesgo2",
  proceso: "riesgo2",
  riesgoLegal: "riesgo2",
  riesgoOperativo: "riesgo2",
  riesgoContagio: "riesgo2",
  riesgoReputacional: "riesgo2",
  riesgoCliente: "riesgo2",
  riesgoProductos: "riesgo2",
  riesgoDistribucion: "riesgo2",
  riesgoJurisdiccion: "riesgo2",

}]

class App extends Component {
  constructor() {
    super();
    this.state = { 
      tablaIdentificacion: tablaIdentificacion,
    }
  }
  render() {
    const { tablaIdentificacion } = this.state;
    return (
    <Grid>
      <Row>
        <AppBar position='sticky'>
          <Toolbar>
            <Typography variant='title' color='inherit'>
              Sarlaft
            </Typography>
          </Toolbar>
        </AppBar>
      </Row>
      <Row>
        <Col md={12} lg={12}>
          <div>
            <TablaIdentificacion informacion = {tablaIdentificacion} ></TablaIdentificacion>
          </div>
        </Col>
      </Row>
    </Grid>
    );
  }
}
export default App;



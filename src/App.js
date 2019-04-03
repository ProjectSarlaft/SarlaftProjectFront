import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TablaIdentificacion from './componentes/identification/TablaIdentificacion';
import TablaIdentificacionHeader from './componentes/identification/TablaIdentificacionHeader';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import crearFila from './servicios/identificacion/crearFila.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      tablaIdentificacion: new Array(crearFila),
    }
  }
  render() {
    const { tablaIdentificacion } = this.state;
    return (
    <Grid fluid>
      <Row>
        <AppBar position='sticky'>
          <Toolbar>
            <Typography  lg={3} variant='title' color='inherit'>
              Sarlaft
            </Typography>
            <Fab color="secondary" aria-label="Add" className="body" onClick={() => { this.adicionarFila()}} >
              <AddIcon />
            </Fab>
          </Toolbar>
        </AppBar>
      </Row>
      <Row>
        <Col md={12} lg={12}>
          <TablaIdentificacionHeader />
        </Col>
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
  
  adicionarFila = () => {
    const { tablaIdentificacion } = this.state;
    this.setState(state => {
      state.tablaIdentificacion.unshift(crearFila);
      return {
        tablaIdentificacion
      }
    });
  }
}


export default App;




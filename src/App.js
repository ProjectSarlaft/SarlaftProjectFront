import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TablaIdentificacion from './componentes/identification/TablaIdentificacion';
import TablaIdentificacionHeader from './componentes/identification/TablaIdentificacionHeader';
import AdicionFilaAlerta from './componentes/identification/AdicionFilaAlerta.js';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import crearFila from './servicios/identificacion/crearFila.js'
import validacionFilaIdentificacion from './servicios/identificacion/validacionFilaIdentificacion.js'
import cambiarEstadoReadOnly from './servicios/identificacion/cambiarEstadoReadOnly.js'
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './App.css';

const options = [
  'Identificacion',
  'Control',
  'Medicion',
  'Monitoreo',];

  const ITEM_HEIGHT = 48;

class App extends Component {
  constructor() {
    super();
    this.state = { 
      tablaIdentificacion: [crearFila],
      nuevaFilaIdentificacion: [crearFila],
      alerta: false,
      mensajeAlerta: "",
      respuestaAlerta: false,
      indiceActual: 0,
      anchorEl: null,
    }

    this.adicionarFila = this.adicionarFila.bind(this);
    this.actualizarInformacion = this.actualizarInformacion.bind(this);
    this.eventoTableInformacion = this.eventoTableInformacion.bind(this);
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  actualizarInformacion(event) {
      const {id, name, value, checked} = event.target;
      const finalValue = value === "" ? checked : value; // Si el value es "" quiere decir que se actualizo un checkbox, por lo tanto retornaremos el checkbox.
      this.setState(prevState => {
        const nuevaFilaIdentificacion = prevState.nuevaFilaIdentificacion.map((row, j) => {
          if(j+"" === id) {
            return {...row, [name]: finalValue};
          } else {
            return row;
          }
        });
        return {nuevaFilaIdentificacion}
      });

      if(this.state.mensajeAlerta !== ""){
        this.setState({
          mensajeAlerta:"",
        })
      }
  }
  
  adicionarFila() {
    // Validar que la fila actual tenga todos los datos necesarios.
    const {nuevaFilaIdentificacion, indiceActual} = this.state;
    const camposFaltantes = validacionFilaIdentificacion(nuevaFilaIdentificacion, indiceActual);
    if(camposFaltantes.length === 0) {
      //Actualizar Estado por que todos los campos requeridos han sido llenados.
      this.setState({
        tablaIdentificacion: this.state.nuevaFilaIdentificacion.concat(crearFila),
        nuevaFilaIdentificacion: this.state.nuevaFilaIdentificacion.concat(crearFila),  
        indiceActual:  indiceActual +1,
      });
      // PENDIENTE Crear metodo para añadir esta columnuna en la BD
    } else {
      // Mandar Alerta
      var textoAlerta = "Los siguientes campos deben ser llenanos";
      for (var index = 0; index < camposFaltantes.length ; index ++) {
        textoAlerta = textoAlerta + " " + camposFaltantes[index] + ","
      }
      this.setState({
        alerta: true,
        mensajeAlerta: textoAlerta,
      })
    }
  }

  eventoTableInformacion(event) {
    const {nuevaFilaIdentificacion: filaIdentificacionActualizada} = this.state;
    debugger;
    const tipoEvento = event.target.name;
    const indiceFila = event.target.id;
    
    if (tipoEvento === "delete") {
      //logica para borrar una fila 
      filaIdentificacionActualizada.splice(indiceFila,1);
      this.setState({
        tablaIdentificacion: filaIdentificacionActualizada,
        nuevaFilaIdentificacion: filaIdentificacionActualizada,
        indiceActual:  this.state.indiceActual - 1,
      });
    } else if (tipoEvento === "edit ") {
      //Logica para editar una fila. -> Not define

    }
  }

  render() {
    const { tablaIdentificacion, anchorEl } = this.state;
    debugger
    const open = Boolean(anchorEl);
    return (
    <Grid>
      <Row>
        <AppBar position='sticky'>
          <Toolbar>
            <IconButton
              aria-label="More"
              aria-owns={open ? 'long-menu' : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}
            > 
               <MoreVertIcon />
            </IconButton>
            <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {options.map(option => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
            <Typography  lg={3} variant='title' color='inherit'>
              Sarlaft
            </Typography>
            <Fab color="secondary" aria-label="Add" className="body" onClick={this.adicionarFila} >
              <AddIcon />
            </Fab>
          </Toolbar>
        </AppBar>
      </Row>
      <Row>
        <Col md={12} lg={12}>
          <div>
            <TablaIdentificacion informacion = {tablaIdentificacion} 
                                 actualizarInformacionHandler={this.actualizarInformacion} 
                                 eventoInformacionHandler={this.eventoTableInformacion}>
            </TablaIdentificacion>
          </div>
        </Col>
      </Row>
      <AdicionFilaAlerta 
        open={this.state.alerta} 
        text={this.state.mensajeAlerta}
      ></AdicionFilaAlerta>
    </Grid>
    );
  }
}

export default App;




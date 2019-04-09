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
      anchorEl: null,
    }

    this.adicionarFila = this.adicionarFila.bind(this);
    this.actualizarInformacion = this.actualizarInformacion.bind(this);
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  actualizarInformacion(event) {
      const {id, name, value} = event.target;
      this.setState(prevState => {
        const nuevaFilaIdentificacion = prevState.nuevaFilaIdentificacion.map((row, j) => {
          if(j+"" === id) {
            return {...row, [name]: value};
          } else {
            return row;
          }
        });
        return {nuevaFilaIdentificacion}
      });
  }
  
  adicionarFila() {
    this.setState({
      tablaIdentificacion: this.state.tablaIdentificacion.concat(crearFila),
    });
    console.log(this.state)
  }
  
  render() {
    const { tablaIdentificacion } = this.state;
    const { anchorEl } = this.state;
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
            <TablaIdentificacion informacion = {tablaIdentificacion} actualizarInformacionHandler={this.actualizarInformacion}></TablaIdentificacion>
          </div>
        </Col>
      </Row>
    </Grid>
    );
  }
}

export default App;




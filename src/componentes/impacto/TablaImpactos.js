import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import DatosImpacto from './DatosImpacto';
import RiesgosAsociados from './RiesgosAsociados';
import crearFilaTablaImpacto from './../../servicios/impacto/crearFilaTablaImpacto';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import validacionTablaImpacto from './../../servicios/impacto/validacionTablaImpacto';
import AlertaTablaImpacto from './AlertaTablaImpacto';
import HeadersTablaImpactos from './HeadersTablaImpactos';
import EventosTablaImpacto from './EventosTablaImpacto';

class TablaImpactos extends Component {
    constructor(props) {
       debugger
        super(props);
        this.state = {
            informacion: [crearFilaTablaImpacto, crearFilaTablaImpacto, crearFilaTablaImpacto ],
            indice: 3,
            alerta: false,
            mensajeAlerta: "",
        }
        
        this.adicionarFila = this.adicionarFila.bind(this);
        this.guardarInformacion = this.guardarInformacion.bind(this);
        this.actualizarInformacion = this.actualizarInformacion.bind(this);
        this.handleEvento = this.handleEvento.bind(this);
    }

    adicionarFila() {
        const {informacion, indice} = this.state;
        if (informacion.length < 5) {
            this.setState({
                informacion: this.state.informacion.concat(crearFilaTablaImpacto),
                indice:  indice +1,
              }); 
        }
    };

    handleEvento(event) {
      const {informacion, indice} = this.state;
      const tipoEvento = event.target.name;
      const indiceFila = event.target.id;
      debugger
      if (tipoEvento === "delete") {
        //logica para borrar una fila 
        if (indice > 3) {
          informacion.splice(indiceFila,1);
          this.setState({
            informacion: informacion,
            indice:  this.state.indice - 1,
          });
        } else {
          this.setState({
            alerta: true,
            mensajeAlerta: "El minimo de filas son 3",
          })
        }
      }
    }
  

    guardarInformacion() {
        const {informacion} = this.state;
        const validacion = validacionTablaImpacto(informacion);
        if (validacion.length > 0) {
            // Faltan Campos por llenar
            var mensajeAlerta = "Los siguientes campos deben ser llenanos";
            for (var index = 0; index < validacion.length ; index ++) {
                mensajeAlerta = mensajeAlerta + " " + validacion[index] + ","
            }
            this.setState({
                alerta: true,
                mensajeAlerta: mensajeAlerta,
              })
        } else {
            // Todos los campos estan en orden, se llama a la BD
        }
    };

    actualizarInformacion(event) {
      debugger
      const {id, name, value, checked} = event.target;
      const finalValue = value === "" ? checked : value; // Si el value es "" quiere decir que se actualizo un checkbox, por lo tanto retornaremos el checkbox.
      this.setState(prevState => {
        const informacion = prevState.informacion.map((row, j) => {
          if(j+"" === id) {
            return {...row, [name]: finalValue};
          } else {
            return row;
          }
        });
        return {informacion}
      });
      if(this.state.mensajeAlerta !== ""){
        this.setState({
          mensajeAlerta:"",
        })
      }
  }

    render() {
      const {informacion, alerta, mensajeAlerta} = this.state;
      return (
        <div>
          {botonAgregar(this.adicionarFila, this.guardarInformacion)}  
          {validacionInfo(alerta, mensajeAlerta)}
          {crearHeaders()}
          {strToComponents(informacion,this.actualizarInformacion, this.handleEvento)}
        </div>
          );
        }
      }

      const  botonAgregar = (agregarFilaHandler, guardarInfoHandler) => (
        <Row>
            <Fab color="secondary" aria-label="Add" size="small" onClick={agregarFilaHandler} >
                <AddIcon />
            </Fab>
            <Fab color="secondary" aria-label="Save" size="small" onClick={guardarInfoHandler} >
                <SaveIcon />
            </Fab>
        </Row>
      );

      const  validacionInfo = (alerta, mensajeAlerta) => (
           <AlertaTablaImpacto 
                    open={alerta} 
                    text={mensajeAlerta}
            ></AlertaTablaImpacto>
      );

      const  crearHeaders = () => (
        <HeadersTablaImpactos>></HeadersTablaImpactos>
   );

      const strToComponents = (informacion, actualizarInformacionHandler, handlerEvento) => (
        informacion.map( (row, index) => 
            (
            <Row>
                <Col md={3} lg={3} >
                    <DatosImpacto 
                        escala ={row.escala} 
                        nivel = {row.nivel} 
                        afectacionEconomica = {row.afectacionEconomica}
                        onChangeRow = {actualizarInformacionHandler}
                        id = {index}
                        key = {index}/>
                </Col>
                <Col md={6} lg={6} >
                    <RiesgosAsociados
                        riesgoLegal = {row.riesgoLegal}
                        riesgoOperativo = {row.riesgoOperativo}
                        riesgoContagio = {row.riesgoContagio}
                        riesgoReputacional = {row.riesgoReputacional}
                        onChangeRow = {actualizarInformacionHandler}
                        id = {index}
                        key = {index}/>
                </Col>
                <Col md={3} lg={3}>
                    <EventosTablaImpacto
                        eventHandler={handlerEvento}
                        id = {index}
                        key = {index}>                    
                    </EventosTablaImpacto>
                </Col>
          </Row>)
    ));
      export default TablaImpactos;
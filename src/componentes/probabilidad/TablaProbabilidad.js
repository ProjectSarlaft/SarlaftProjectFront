import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import DatosProbabilidad from './DatosProbabilidad';
import crearFilaTablaProbabilidad from '../../servicios/probabilidad/crearFilaTablaProbabilidad';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import validacionTablaProbabilidad from '../../servicios/probabilidad/validacionTablaProbabilidad';
import adicionarProbabilidadService from '../../servicios/probabilidad/adicionarProbabilidadService';
import editarProbabilidadService from '../../servicios/probabilidad/editarProbabilidadService';
import eliminarProbabilidadService from '../../servicios/probabilidad/eliminarProbabilidadService';
import obtenerInformacionProbabilidadService from '../../servicios/probabilidad/obtenerInformacionProbabilidadService';
import AlertaTablas from './../transversales/alerta/AlertaTablas';
import HeaderTablaProbabilidad from './HeaderTablaProbabilidad';
import EventosTablaProbabilidad from './EventosTablaProbabilidad';

class TablaImpactos extends Component {
   constructor(props) {
      debugger
       super(props);
       this.state = {
           informacionInicialBack: [],
           informacion: [],
           indice: 0,
           alerta: false,
           mensajeAlerta: "",
       }
      
       this.adicionarFila = this.adicionarFila.bind(this);
       this.guardarInformacion = this.guardarInformacion.bind(this);
       this.actualizarInformacion = this.actualizarInformacion.bind(this);
       this.handleEvento = this.handleEvento.bind(this);
       this.handleClose = this.handleClose.bind(this);
   }


   componentDidMount(){
    obtenerInformacionProbabilidadService().then(response => 
      this.setState(
        { 
          informacionInicialBack: response,
          informacion: response,
          indice: response.length,
        }));
}

   handleEvento(event) {
    const {informacion, indice} = this.state;
    const tipoEvento = event.target.name;
    const indiceFila = event.target.id;
    debugger
    if (tipoEvento === "delete") {
      if (indice > 3) {
        eliminarProbabilidadService(informacion[indiceFila].escala)
          .then(res => {
            if(res.status < 400) {
              informacion.splice(indiceFila,1);
              this.setState({
                informacion: informacion,
                indice:  this.state.indice - 1,
                alerta: true,
                mensajeAlerta: "La fila ha sido eliminada correctamente",
              });
            } else {
              this.setState({
                alerta: true,
                mensajeAlerta: "La fila no ha sido eliminada correctamente",
              })
            }
          });
      } else {
        this.setState({
          alerta: true,
          mensajeAlerta: "El minimo de filas son 3",
        })
      }
    }
  }

   adicionarFila() {
       const {informacion, indice} = this.state;
       if (informacion.length < 5) {
           this.setState({
               informacion: this.state.informacion.concat(crearFilaTablaProbabilidad),
               indice:  indice +1,
               alerta: false,
             });
       }
   };

   guardarInformacion() {
       const {informacion} = this.state;
       const validacion = validacionTablaProbabilidad(informacion);
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
        this.guardarInfoBackEnd(informacion);
       }
   };

   guardarInfoBackEnd = function(informacion) {
    var guardadoExitoso = true;
    const listaIdIniciales = this.state.informacionInicialBack.map(dato => dato.id).filter(dato => dato !== undefined);
    const informacionNueva = informacion.filter(datoActual => !listaIdIniciales.includes(datoActual.id));
    const informacionEditada = informacion.filter(datoActual => listaIdIniciales.includes(datoActual.id));

    informacionNueva.map(fila => adicionarProbabilidadService(fila)
      .then(res => {
        if(res.status >= 400) {
          guardadoExitoso = false;
          this.setState({
            alerta: true,
            mensajeAlerta: "El proceso de guardado no ha finalizado adecuadamente",
          })
        } 
      }));

    informacionEditada
      .filter(info => info.hasOwnProperty('id'))
      .filter(info => info.id !== undefined)
      .map(fila => editarProbabilidadService(fila)
      .then(res => {
        if(res.status >= 400) {
          guardadoExitoso = false;
          this.setState({
            alerta: true,
            mensajeAlerta: "El proceso de guardado no ha finalizado adecuadamente",
          })
        }}));


    debugger;
    if(guardadoExitoso) {
      obtenerInformacionProbabilidadService().then(response => 
        this.setState(
          {
            informacionInicialBack: response,
            informacion: response,
            indice: response.length,
            alerta: true,
            mensajeAlerta: "El proceso de guardado ha finalizado adecuadamente",
          }));
    }
  } 

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

   handleClose(){
      this.setState({ 
        alerta: false,
        mensajeAlerta: "",
    });
    }

   render() {
     const {informacion, alerta, mensajeAlerta} = this.state;
     return (
       <div>
         {botonAgregar(this.adicionarFila, this.guardarInformacion)} 
         {validacionInfo(alerta, mensajeAlerta, this.handleClose)}
         {crearHeader()}
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

     const  validacionInfo = (alerta, mensajeAlerta, handleClose) => (
          <AlertaTablas
                   open={alerta}
                   text={mensajeAlerta}
                   handleClose= {handleClose}
           ></AlertaTablas>
     );

     
     const  crearHeader = () => (
          <HeaderTablaProbabilidad></HeaderTablaProbabilidad>
    );

     const strToComponents = (informacion, actualizarInformacionHandler, handlerEvento) => (
       informacion.map( (row, index) =>
           (
           <Row>
               <Col md={4} lg={4} >
                   <DatosProbabilidad
                       escala ={row.escala}
                       nivel = {row.nivel}
                       posibilidadAnual = {row.posibilidadAnual}
                       onChangeRow = {actualizarInformacionHandler}
                       id = {index}
                       key = {index}/>
               </Col>
               <Col md={1} lg={1} >
                  <EventosTablaProbabilidad
                      eventHandler={handlerEvento}
                      id = {index}
                      key = {index}>    
                  </EventosTablaProbabilidad>
               </Col>
         </Row>)
   ));
     export default TablaImpactos;



import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import DatosProbabilidad from './DatosProbabilidad';
import crearFilaTablaProbabilidad from '../../servicios/probabilidad/crearFilaTablaProbabilidad';
import crearHeadersTablaProbabilidad from '../../servicios/probabilidad/crearHeadersTablaProbabilidad';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import validacionTablaProbabilidad from '../../servicios/probabilidad/validacionTablaProbabilidad';
import AlertaTablaProbabilidad from './AlertaTablaProbabilidad';

class TablaImpactos extends Component {
   constructor(props) {
      debugger
       super(props);
       this.state = {
           informacion: [crearFilaTablaProbabilidad, crearFilaTablaProbabilidad, crearFilaTablaProbabilidad ],
           indice: 3,
           alerta: false,
           mensajeAlerta: "",
       }
      
       this.handleChange = this.handleChange.bind(this);
       this.adicionarFila = this.adicionarFila.bind(this);
       this.guardarInformacion = this.guardarInformacion.bind(this);
       this.actualizarInformacion = this.actualizarInformacion.bind(this);
   }

   handleChange(event) {
     this.state.actualizarInformacionHandler(event);
   };

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
       debugger
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
     const headers = [crearHeadersTablaProbabilidad];
     return (
       <div>
         {botonAgregar(this.adicionarFila, this.guardarInformacion)} 
         {validacionInfo(alerta, mensajeAlerta)}
         {strToComponents(headers, this.actualizarInformacion)}
         {strToComponents(informacion,this.actualizarInformacion)}
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
          <AlertaTablaProbabilidad
                   open={alerta}
                   text={mensajeAlerta}
           ></AlertaTablaProbabilidad>
     );

     const strToComponents = (informacion, actualizarInformacionHandler) => (
       informacion.map( (row, index) =>
           (
           <Row>
               <Col md={6} lg={6} >
                   <DatosProbabilidad
                       escala ={row.escala}
                       nivel = {row.nivel}
                       posibilidadAnual = {row.posibilidadAnual}
                       onChangeRow = {actualizarInformacionHandler}
                       id = {index}
                       key = {index}/>
               </Col>
         </Row>)
   ));
     export default TablaImpactos;



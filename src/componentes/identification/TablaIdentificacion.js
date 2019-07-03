import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import Riesgo from './Riesgo';
import RiesgosAsociados from './RiesgosAsociados';
import FactoresRiesgo from './FactoresRiesgo';
import EventosTablaIdentificacion from './EventosTablaIdentificacion';
import crearFila from '../../servicios/identificacion/crearFila';
import validacionFilaIdentificacion from '../../servicios/identificacion/validacionFilaIdentificacion.js';
import adicionarIdentificacionService from '../../servicios/identificacion/adicionarIdentificacionService';
import eliminarIdentificacionService from '../../servicios/identificacion/eliminarIdentificacionService';
import AdicionFilaAlerta from './AdicionFilaAlerta';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TablaIdentificacionHeader from './TablaIdentificacionHeader';


class TablaIdentificacion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            informacion: [crearFila],
            indiceActual: 0, 
            alerta: false,
            mensajeAlerta:"",

        }
       this.handleEvent = this.handleEvent.bind(this);
       this.adicionarFila = this.adicionarFila.bind(this);
       this.actualizarInformacion = this.actualizarInformacion.bind(this);
    }

    actualizarInformacion(event) {
      //this.state.actualizarInformacionHandler(event);
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
    };



    handleEvent(event) {
        const {informacion} = this.state;
        debugger;
        const tipoEvento = event.target.name;
        const indiceFila = event.target.id;
        
        if (tipoEvento === "delete") {
          eliminarIdentificacionService(informacion[indiceFila].riesgo);
          informacion.splice(indiceFila,1);
          this.setState({
            informacion: informacion,
            indiceActual:  this.state.indiceActual - 1,
          });
        } else if (tipoEvento === "edit ") {
          //Logica para editar una fila. -> Not define

        }
    }

    adicionarFila() {
      // Validar que la fila actual tenga todos los datos necesarios.
      const {informacion, indiceActual} = this.state;
      const camposFaltantes = validacionFilaIdentificacion(informacion, indiceActual);
      if(camposFaltantes.length === 0) {
        //Actualizar Estado por que todos los campos requeridos han sido llenados.
        this.setState({
          informacion: this.state.informacion.concat(crearFila),
          indiceActual:  indiceActual +1,
        });
        adicionarIdentificacionService(informacion[indiceActual]);
        console.log(JSON.stringify(informacion[indiceActual]));
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
  
 
    render() {
      debugger
      const {informacion, alerta, mensajeAlerta} = this.state;
      return (
        <div>
         {botonAgregar(this.adicionarFila)} 
         {validacionInfo(alerta, mensajeAlerta)}
         {crearHeadersTablaImpacto()}
         {strToComponents(informacion, this.actualizarInformacion, this.handleEvent)}
        </div>
          );
        }
      }


      const  botonAgregar = (agregarFilaHandler) => (
        <Row>
            <Fab color="secondary" aria-label="Add" size="small" onClick={agregarFilaHandler} >
                <AddIcon />
            </Fab>
        </Row>
      );


      const  validacionInfo = (alerta, mensajeAlerta) => (
        <AdicionFilaAlerta
                 open={alerta}
                 text={mensajeAlerta}
         ></AdicionFilaAlerta>
   );

   const  crearHeadersTablaImpacto = (alerta, mensajeAlerta) => (
    <TablaIdentificacionHeader></TablaIdentificacionHeader>
);

      const strToComponents = (informacion, handlerChange, handlerEvent) => (
        informacion.map( (row, index) => 
            (
            <Row>
                <Col md={3} lg={3}>
                    <Riesgo 
                        riesgo = {row.riesgo} 
                        proceso = {row.proceso}
                        descripcion = {row.descripcion}
                        id = {index}
                        key = {index + "riesgos"}                    
                        isReadOnly = {row.isReadOnly}
                        onChangeRow = {handlerChange} />
                </Col>
                <Col md={4} lg={4} >
                    <RiesgosAsociados 
                        riesgoLegal ={row.riesgoLegal} 
                        riesgoOperativo = {row.riesgoOperativo} 
                        riesgoContagio = {row.riesgoContagio} 
                        riesgoReputacional = {row.riesgoReputacional}
                        id = {index}
                        key = {index + "riesgoAsociado"}                       
                        isReadOnly = {row.isReadOnly}
                        onChangeRow = {handlerChange} />
                </Col>
                <Col md={3} lg={3} >
                    <FactoresRiesgo 
                        riesgoCliente = {row.riesgoCliente}
                        riesgoProductos = {row.riesgoProductos}
                        riesgoDistribucion = {row.riesgoDistribucion}
                        riesgoJurisdiccion = {row.riesgoJurisdiccion}
                        id = {index}
                        key = {index + "factoresRiesgo"}                                      
                        isReadOnly = {row.isReadOnly}
                        onChangeRow = {handlerChange} />
                </Col>   
                <Col md={2} lg={2}>
                  <EventosTablaIdentificacion
                    eventHandler={handlerEvent}
                    id = {index}
                    key = {index}                    
                  ></EventosTablaIdentificacion>
                </Col>                  
          </Row>)
    ));
      export default TablaIdentificacion;
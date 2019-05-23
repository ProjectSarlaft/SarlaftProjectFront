import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import DatosImpacto from './DatosImpacto';
import RiesgosAsociados from './RiesgosAsociados';
import crearFilaTablaImpacto from './../../servicios/impacto/crearFilaTablaImpacto';
import crearHeadersTablaImpacto from './../../servicios/impacto/crearHeadersTablaImpacto';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import validacionTablaImpacto from './../../servicios/impacto/validacionTablaImpacto';
import AlertaTablaImpacto from './AlertaTablaImpacto';

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
        
        this.handleChange = this.handleChange.bind(this);
        this.adicionarFila = this.adicionarFila.bind(this);
        this.guardarInformacion = this.guardarInformacion.bind(this);
    }

    handleChange(event) {
      this.state.actualizarInformacionHandler(event);
    };

    adicionarFila() {
        const {informacion, indice} = this.state;
        if (informacion.length < 5) {
            this.setState({
                informacion: this.state.informacion.concat(crearFilaTablaImpacto),
                indice:  indice +1,
              }); 
        }
    };

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

    render() {
      const {informacion, alerta, mensajeAlerta} = this.state;
      const headers = [crearHeadersTablaImpacto];
      debugger
      return (
        <div>
          {botonAgregar(this.adicionarFila, this.guardarInformacion)}  
          {validacionInfo(alerta, mensajeAlerta)}
          {strToComponents(headers)}
          {strToComponents(informacion)}
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

      const strToComponents = (informacion) => (
        informacion.map( (row, index) => 
            (
            <Row>
                <Col md={6} lg={6} >
                    <DatosImpacto 
                        escala ={row.escala} 
                        nivel = {row.nivel} 
                        afectacionEconomica = {row.afectacionEconomica} 
                        id = {index}
                        key = {index}/>
                </Col>
                <Col md={6} lg={6} >
                    <RiesgosAsociados
                        riesgoLegal = {row.riesgoLegal}
                        riesgoOperativo = {row.riesgoOperativo}
                        riesgoContagio = {row.riesgoContagio}
                        riesgoReputacional = {row.riesgoReputacional}
                        id = {index}
                        key = {index}/>
                </Col>
          </Row>)
    ));
      export default TablaImpactos;
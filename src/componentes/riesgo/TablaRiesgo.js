import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import crearObjetoRiesgoEscala from '../../servicios/riesgo/crearObjetoRiesgoEscala';
import DatosEscalaRiesgo from './DatosEscalaRiesgo';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import HeaderEscalaRiesgo from './HeaderEscalaRiesgo';
import obtenerInformacionMatrizRiesgo from '../../servicios/riesgo/obtenerInformacionMatrizRiesgo';
import obtenerInformacionEscalaRiesgo from '../../servicios/riesgo/obtenerInformacionEscalaRiesgo';
import eliminarRiesgoEscalaService from '../../servicios/riesgo/eliminarRiesgoEscalaService';
import { Input } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import EventosTablaRiesgo from './EventosTablaRiesgo';
import AlertaTablas from './../transversales/alerta/AlertaTablas';

const opcionesRiesgoEscala = ['Muy Bajo', 'Bajo', 'Medio', 'Alto', 'Muy Alto'];
const MAXIMA_CANTIDAD_FILAS_ESCALA_RIESGO = 5;
const STRING_VACIO = "";

class TablaRiesgo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            informacionEscalaRiesgo: [],
            informacionMatrizRiesgo: [],
            alerta: false,
            mensajeAlerta: "",
        }
        
        this.actualizarInformacionEscalaRiesgos = this.actualizarInformacionEscalaRiesgos.bind(this);
        this.actualizarInformacionMatrizRiesgo = this.actualizarInformacionMatrizRiesgo.bind(this);
        this.adicionarFilaEscalaRiesgo = this.adicionarFilaEscalaRiesgo.bind(this);
        this.guardarInformacionEscalaRiesgo = this.guardarInformacionEscalaRiesgo.bind(this);
        this.eliminarRiesgoEscalaHandler = this.eliminarRiesgoEscalaHandler.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount(){
        obtenerInformacionMatrizRiesgo().then(response => this.setState({informacionMatrizRiesgo: response}));
        obtenerInformacionEscalaRiesgo().then(response => this.setState({informacionEscalaRiesgo: response}));
    }

    
   adicionarFilaEscalaRiesgo() {
      const {informacionEscalaRiesgo} = this.state;
      if (informacionEscalaRiesgo.length < MAXIMA_CANTIDAD_FILAS_ESCALA_RIESGO) {
          this.setState({
              informacionEscalaRiesgo: this.state.informacionEscalaRiesgo.concat(
                {riesgoEscala:
                  {
                    escala:[informacionEscalaRiesgo.length],
                    accion: STRING_VACIO,
                    color:  STRING_VACIO
                  }
                }),
            });
      }
    };

    guardarInformacionEscalaRiesgo() {
        //Todo implementaion
    };

    guardarInformacionMatrizRiesgo() {
      //Todo implementaion
    };

    eliminarRiesgoEscalaHandler(event) {
      var { informacionMatrizRiesgo, informacionEscalaRiesgo } = this.state;
      debugger
      var { value } = event.currentTarget;
      const hayAlmenosUnRegistroEnMatrizRiesgo = informacionMatrizRiesgo.some((row) => row.riesgoEscala.escala === value);
      
      if (hayAlmenosUnRegistroEnMatrizRiesgo) {
        this.setState({
          alerta: true,
          mensajeAlerta: "Por favor elimine todos los registro en la matriz de riesgo con el valor " + value,
        })
      } else {
          if(informacionEscalaRiesgo.length > 3) {
          const obtenerIdentificaroRiesgoEscala = informacionEscalaRiesgo.filter((escalaRiesgo) =>  escalaRiesgo.escala === value).map((riesgoEscala) => riesgoEscala.color); 
          eliminarRiesgoEscalaService(obtenerIdentificaroRiesgoEscala)
            .then(res => {
              if(res.status<400) {
                const matrizResultanteRiesgoEscala = informacionEscalaRiesgo.filter((escalaRiesgo) =>  escalaRiesgo.escala !== value);
                this.setState({
                  informacionEscalaRiesgo: matrizResultanteRiesgoEscala,
                  alerta: true,
                  mensajeAlerta: "La fila de riesgo escala ha sido eliminada correctamente",
                });
              } else {
                this.setState({
                  alerta: true,
                  mensajeAlerta: "La fila de riesgo escala no ha sido eliminada correctamente",
                })
              }
            });
          } else {
            this.setState({
              alerta: true,
              mensajeAlerta: "Recuerde que el minimo de filas permitidas son 3 ",
            })
          }
        }
    }
    

    actualizarInformacionEscalaRiesgos(event) {
      var {id, name, value} = event.target;
      if (id === undefined) {
        id = event.currentTarget.id;
      }
      debugger
      const valorOriginal = this.state.informacionEscalaRiesgo[id].color;
      if(!this.state.informacionEscalaRiesgo.some((riesgoEscala) => riesgoEscala.color === value)) // Verificar que el color no este seleccionado
      this.setState(prevState => {
        const informacionEscalaRiesgo = prevState.informacionEscalaRiesgo.map((row, j) => {
          if(j + STRING_VACIO === id) {
            row.riesgoEscala[name] = value;
            return row;
          } else {
            return row;
          }
        });
          const informacionMatrizRiesgo = prevState.informacionMatrizRiesgo.map((row) => {
          if(row.riesgoEscala[name] === valorOriginal) {
            row.riesgoEscala[name] = value;
          }
          return row;
        })
        return {informacionEscalaRiesgo, informacionMatrizRiesgo}
      });
  };

  actualizarInformacionMatrizRiesgo(event) {
    debugger
    const {name, value} = event.target;
    const escalaRiesgo = this.state.informacionEscalaRiesgo.filter((escalaRiesgoRegistro) => value === escalaRiesgoRegistro.color);
    this.setState(prevState => {
      const informacionMatrizRiesgo = prevState.informacionMatrizRiesgo.map((row) => {
        if(name === row.riesgoId) {
          row.riesgoEscala = escalaRiesgo[0];
        }
        return row;
      })
      return {informacionMatrizRiesgo}
    });
};

    handleClose(){
      this.setState({ 
        alerta: false,
        mensajeAlerta: "",
     });
    }

    render() {
      const {informacionEscalaRiesgo , informacionMatrizRiesgo} = this.state;
        return (
          <div>
              {botonGuardarMatrizRiesgo(this.guardarInformacionMatrizRiesgo)}
              {crearMatrizRiesgo(informacionMatrizRiesgo, informacionEscalaRiesgo,this.actualizarInformacionMatrizRiesgo)}
              {botonAgregarYGuardarEscalaRiesgo(this.adicionarFilaEscalaRiesgo, this.guardarInformacion)} 
              {crearHeaderEscalaRiesgo()}
              {escribirInformacionEscalaRiesgo(informacionEscalaRiesgo, this.actualizarInformacionEscalaRiesgos, this.eliminarRiesgoEscalaHandler)}
              {alertaTablaRiesgo(this.state.alerta, this.state.mensajeAlerta, this.handleClose)}
          </div>
            );
        }
      }

      const  botonAgregarYGuardarEscalaRiesgo = (agregarFilaHandler, guardarInfoHandler) => (
        <Row>
            <Fab color="secondary" aria-label="Add" size="small" onClick={agregarFilaHandler} >
                <AddIcon />
            </Fab>
            <Fab color="secondary" aria-label="Save" size="small" onClick={guardarInfoHandler} >
                <SaveIcon />
            </Fab>
        </Row>
      );
 
      const  botonGuardarMatrizRiesgo = (guardarInfoHandler) => (
        <Row>
            <Fab color="secondary" aria-label="Save" size="small" onClick={guardarInfoHandler} >
                <SaveIcon />
            </Fab>
        </Row>
      );

      const  alertaTablaRiesgo = (alerta, mensajeAlerta, handleClose) => (
        <AlertaTablas 
                 open={alerta} 
                 text={mensajeAlerta}
                 handleClose= {handleClose}
         ></AlertaTablas>
       );


      const escribirInformacionEscalaRiesgo = (informacion, actualizarInformacionHandler, eliminarRiesgoEscalaHandler) => (
        informacion.map((riesgoEscala, index) => 
            (
            <Row>
                <Col md={4} lg={4} >
                    <DatosEscalaRiesgo 
                        escala ={riesgoEscala.escala} 
                        color = {riesgoEscala.color}
                        colores = {informacion}
                        onChangeRow = {actualizarInformacionHandler}
                        id = {index}
                        key = {index}/>
                </Col>
                <Col md={1} lg={1}>
                    <EventosTablaRiesgo
                        eliminarRiesgoEscalaHandler = {eliminarRiesgoEscalaHandler}
                        id = {index}
                        value = {riesgoEscala.escala}>                    
                    </EventosTablaRiesgo>
                </Col>
          </Row>)
    ));

      const  crearHeaderEscalaRiesgo = () => (
        <HeaderEscalaRiesgo></HeaderEscalaRiesgo>
      );

      function crearMatrizRiesgo(informationMatrizRiesgo, informacionEscalaRiesgo, actualizarInformacionMatrizRiesgo) {
        const {listaImpactos, listaProbabilidades} = obtenerListaDeProbabilidadesEImpactos(informationMatrizRiesgo)
        var matrizRiesgo = [];
        crearHeadersMatrizRiesgo(listaProbabilidades, informacionEscalaRiesgo, actualizarInformacionMatrizRiesgo, matrizRiesgo);
        return crearInformacionMatrizRiesgo(informationMatrizRiesgo, listaProbabilidades, listaImpactos, informacionEscalaRiesgo, actualizarInformacionMatrizRiesgo, matrizRiesgo);
      }

      function crearHeadersMatrizRiesgo(listaProbabilidades, informacionEscalaRiesgo, actualizarInformacionMatrizRiesgo, matrizRiesgo) {
          matrizRiesgo.push(<Row> {crearRow(listaProbabilidades, informacionEscalaRiesgo, actualizarInformacionMatrizRiesgo)}</Row>)
      }

      function crearRow(informacionMatrizRiesgo,informacionEscalaRiesgo,actualizarInformacionMatrizRiesgo) {
        var fila = []
        debugger
        informacionMatrizRiesgo.map((value) => {
          if(value.hasOwnProperty('impacto') && value.hasOwnProperty('probabilidad')) {
            fila.push(
              <Col lg={2} md={2}>
                <Select
                  name = {value.riesgoId}
                  key = {value.riesgoId} 
                  id = {value.riesgoId} 
                  style={{
                    backgroundColor: value.riesgoEscala.color,
                    width: "100%"
                  }}
                  renderValue = {() => value.riesgoEscala.escala||''}
                  onChange={actualizarInformacionMatrizRiesgo}
                  input={<Input name="escala" value={value.riesgoEscala.escala||''}  id={value.id}/>}
                  > 
                  {informacionEscalaRiesgo.map((riesgoEscala)=> {
                    return (
                      <MenuItem 
                        value={riesgoEscala.color}
                        name = {value.riesgoId}  
                        style={{
                        backgroundColor: riesgoEscala.color
                        }}>{riesgoEscala.escala}
                      </MenuItem>);
                  })};   
                  </Select> 
              </Col>);          
        } else {
          fila.push(
          <Col lg={2} md={2}>
            <Input 
              name = {value.escalaImpacto + value.escalaProbabilidad}
              style={{
                backgroundColor: value.riesgoEscala.color
              }}
              key = {value.escalaImpacto + value.escalaProbabilidad} 
              id = {value.escalaImpacto + value.escalaProbabilidad} 
              value={value.riesgoEscala.escala||''} 
              readOnly={true}>
            </Input>
          </Col>);
        }
      });
        return fila;
      }

      function crearInformacionMatrizRiesgo(informationMatrizRiesgo, listaProbabilidades, listaImpactos, informacionEscalaRiesgo, actualizarInformacionMatrizRiesgo, matrizRiesgo) {
        var { contadorSizeFila, registrosPorFila, contadorImpacto } = inicializarVariablesMatrizRiesgo()
        debugger
        for(var value of informationMatrizRiesgo) {
          if(contadorSizeFila < (listaProbabilidades.length -1)) {
            registrosPorFila.push(value);
            contadorSizeFila++;
            if(contadorSizeFila === listaProbabilidades.length -1) {
              registrosPorFila.unshift(listaImpactos[contadorImpacto]);
              matrizRiesgo.push(
                  <Row md={10} lg={10}>
                    {crearRow(registrosPorFila, informacionEscalaRiesgo, actualizarInformacionMatrizRiesgo)}
                  </Row>)  
              contadorImpacto++;
              contadorSizeFila = 0;
              registrosPorFila = []
            }
          }
      }
      return matrizRiesgo;
     }

      function obtenerListaDeProbabilidadesEImpactos(informationMatrizRiesgo) {
        const listaImpactos = informationMatrizRiesgo
                                .reduce(function(acc, value) {
                                    if(!acc.some(x => value.impacto.escala === x.riesgoEscala.escala) && (value !== undefined ))
                                      acc.push(crearObjetoRiesgoEscala(value.impacto.escala));return acc}, []);
        
        const listaProbabilidades = informationMatrizRiesgo
                                .reduce(function(acc, value) {
                                    if(!acc.some(x => value.probabilidad.escala === x.riesgoEscala.escala) && (value !== undefined ))
                                      acc.push((crearObjetoRiesgoEscala(value.probabilidad.escala))); return acc}, []);

        // Adionando campo vacio en la matriz                              
        listaProbabilidades.unshift(crearObjetoRiesgoEscala(STRING_VACIO));

        return {
          listaProbabilidades: listaProbabilidades,
          listaImpactos: listaImpactos
        }
      }

      function inicializarVariablesMatrizRiesgo() {
          return {
            contadorSizeFila: 0,
            registrosPorFila: [],
            contadorImpacto: 0
          }
      }

      function riesgoEscalaGroupingByColores(infoRiesgoEscala) {
        const riesgoEscalaBycolores = infoRiesgoEscala.reduce(function(acc, value){
          if(!acc.some(x => value.color === x.color)) acc.push(value); return acc}, []);
          return riesgoEscalaBycolores;
        }
        

      export default TablaRiesgo;
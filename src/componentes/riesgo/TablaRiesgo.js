import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import crearFilaEscalaRiesgo from '../../servicios/riesgo/crearFilaEscalaRiesgo';
import DatosEscalaRiesgo from './DatosEscalaRiesgo';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import HeaderEscalaRiesgo from './HeaderEscalaRiesgo';
import obtenerInformacionMatrizRiesgo from '../../servicios/riesgo/obtenerInformacionMatrizRiesgo';
import obtenerInformacionEscalaRiesgo from '../../servicios/riesgo/obtenerInformacionEscalaRiesgo';
import { Input } from '@material-ui/core';

class TablaRiesgo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            informacionEscalaRiesgo: [],
            informacionMatrizRiesgo: [],
        }
        
        this.actualizarInformacionEscalaRiesgos = this.actualizarInformacionEscalaRiesgos.bind(this);
        this.adicionarFilaEscalaRiesgo = this.adicionarFilaEscalaRiesgo.bind(this);
        this.guardarInformacionEscalaRiesgo = this.guardarInformacionEscalaRiesgo.bind(this);
    }

    componentDidMount(){
        //obtenerInformacionEscalaRiesgo().then(response => this.setState({informacionEscalaRiesgo: response}))
        this.setState({informacionEscalaRiesgo: obtenerInformacionEscalaRiesgo()});
        obtenerInformacionMatrizRiesgo().then(response => this.setState({informacionMatrizRiesgo: response}));
    }

    
   adicionarFilaEscalaRiesgo() {
      const {informacionEscalaRiesgo} = this.state;
      if (informacionEscalaRiesgo.length < 5) {
          this.setState({
              informacionEscalaRiesgo: this.state.informacionEscalaRiesgo.concat({riesgoEscala:{escala:"",accion: "",color:  ""}}),
            });
      }
    };

    guardarInformacionEscalaRiesgo() {
        //Todo implementaion
    };

    guardarInformacionMatrizRiesgo() {
      //Todo implementaion
  };

    actualizarInformacionEscalaRiesgos(event) {
      const {id, name, value} = event.target;
      const valorOriginal = this.state.informacionEscalaRiesgo[id].riesgoEscala[name];
      this.setState(prevState => {
        const informacionEscalaRiesgo = prevState.informacionEscalaRiesgo.map((row, j) => {
          if(j+"" === id) {
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

    render() {
      const {informacionEscalaRiesgo , informacionMatrizRiesgo} = this.state;
      const matrizRiesgo = cearMatrizRiesgo(informacionMatrizRiesgo);
        return (
          <div>
              {botonAgregar(this.adicionarFilaEscalaRiesgo, this.guardarInformacion)} 
              {crearHeaderEscalaRiesgo()}
              {escribirInformacionEscalaRiesgo(informacionEscalaRiesgo, this.actualizarInformacionEscalaRiesgos)}
              {botonGuardar(this.guardarInformacionMatrizRiesgo)}
              {matrizRiesgo}
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
 
      const  botonGuardar = (guardarInfoHandler) => (
        <Row>
            <Fab color="secondary" aria-label="Save" size="small" onClick={guardarInfoHandler} >
                <SaveIcon />
            </Fab>
        </Row>
      );

      const escribirInformacionEscalaRiesgo = (informacion, actualizarInformacionHandler) => (
        informacion.map( (row, index) => 
            (
            <Row>
                <Col md={3} lg={3} >
                    <DatosEscalaRiesgo 
                        escala ={row.riesgoEscala.escala} 
                        accion = {row.riesgoEscala.accion} 
                        color = {row.riesgoEscala.color}
                        onChangeRow = {actualizarInformacionHandler}
                        id = {index}
                        key = {index}/>
                </Col>
          </Row>)
    ));


  const  crearHeaderEscalaRiesgo = () => (
    <HeaderEscalaRiesgo></HeaderEscalaRiesgo>
  );

      function cearMatrizRiesgo(information) {
        // Creando Headers Matriz y Adicionando Empty Space al principio 
        const listaImpactos = information.reduce(function(acc, value){if(!acc.some(x => value.escalaImpacto === x.riesgoEscala.escala) && (value !== undefined )) acc.push(crearObjeto(value.escalaImpacto));return acc}, []);
        const listaProbabilidades = information.reduce(function(acc, value){if(!acc.some(x => value.escalaProbabilidad === x.riesgoEscala.escala) && (value !== undefined )) acc.push(crearObjeto(value.escalaProbabilidad)); return acc}, []);
        listaProbabilidades.unshift(crearObjeto(""));
        debugger
        var matrizRiesgo = [];
        var contadorSizeFila = 0;
        var registrosPorFila = [];
        var contadorImpacto = 0;
        crearHeadersMatrizRiesgo(listaProbabilidades, matrizRiesgo);
        for(var value of information) {
          if(contadorSizeFila < (listaProbabilidades.length -1)) {
            registrosPorFila.push(value);
            contadorSizeFila++;
            if(contadorSizeFila === listaProbabilidades.length -1) {
              registrosPorFila.unshift(listaImpactos[contadorImpacto]);
              matrizRiesgo.push(<Row md={10} lg={10}> {crearRow(registrosPorFila)}</Row>)  
              contadorImpacto++;
              contadorSizeFila = 0;
              registrosPorFila = []
            }
          }
      }
      return matrizRiesgo;
      }

      function crearHeadersMatrizRiesgo(listaProbabilidades, matrizRiesgo) {
          matrizRiesgo.push(<Row> {crearRow(listaProbabilidades)}</Row>)
      }

      function crearRow(registros) {
        var fila = []
        registros.map((value) => {
        fila.push(<Col >
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
            </Col>)
            });
        return fila;
      }


      function crearObjeto(titulo) {
        return {
          riesgoEscala: {
            escala: titulo,
            color: "white"}
          }
      }


      export default TablaRiesgo;
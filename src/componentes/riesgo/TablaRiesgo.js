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
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class TablaRiesgo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            informacionEscalaRiesgo: [],
            informacionMatrizRiesgo: [],
        }
        
        this.actualizarInformacionEscalaRiesgos = this.actualizarInformacionEscalaRiesgos.bind(this);
        this.actualizarInformacionMatrizRiesgo = this.actualizarInformacionMatrizRiesgo.bind(this);
        this.adicionarFilaEscalaRiesgo = this.adicionarFilaEscalaRiesgo.bind(this);
        this.guardarInformacionEscalaRiesgo = this.guardarInformacionEscalaRiesgo.bind(this);
        this.actualizarColorEscalaRiesgo = this.actualizarColorEscalaRiesgo.bind(this);
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
      var {id, name, value} = event.target;
      if (id === undefined) {
        id = event.currentTarget.id;
      }
      const valorOriginal = this.state.informacionEscalaRiesgo[id].riesgoEscala[name];
      if(validarColorExistente(value, this.state.informacionEscalaRiesgo))
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
          debugger
          if(row.riesgoEscala[name] === valorOriginal) {
            row.riesgoEscala[name] = value;
          }
          return row;
        })
        return {informacionEscalaRiesgo, informacionMatrizRiesgo}
      });
  };

  actualizarInformacionMatrizRiesgo(event) {
    const {name, value} = event.target;
    const escalaRiesgo = this.state.informacionEscalaRiesgo.filter((escalaRiesgoRegistro) => value === escalaRiesgoRegistro.riesgoEscala.color);
    debugger
    this.setState(prevState => {
      const informacionMatrizRiesgo = prevState.informacionMatrizRiesgo.map((row) => {
        if(name === row.escalaImpacto+row.escalaProbabilidad) {
          row.riesgoEscala = escalaRiesgo[0].riesgoEscala;
        }
        return row;
      })
      return {informacionMatrizRiesgo}
    });
};

    actualizarColorEscalaRiesgo(event) {
        debugger;
    }

    render() {
      const {informacionEscalaRiesgo , informacionMatrizRiesgo} = this.state;
      const matrizRiesgo = cearMatrizRiesgo(informacionMatrizRiesgo, informacionEscalaRiesgo,this.actualizarInformacionMatrizRiesgo);
        return (
          <div>
              {botonAgregar(this.adicionarFilaEscalaRiesgo, this.guardarInformacion)} 
              {crearHeaderEscalaRiesgo()}
              {escribirInformacionEscalaRiesgo(informacionEscalaRiesgo, this.actualizarInformacionEscalaRiesgos, this.actualizarColorEscalaRiesgo)}
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

      const escribirInformacionEscalaRiesgo = (informacion, actualizarInformacionHandler,actualizarColorEscalaRiesgo) => (
        informacion.map( (row, index) => 
            (
            <Row>
                <Col md={3} lg={3} >
                    <DatosEscalaRiesgo 
                        escala ={row.riesgoEscala.escala} 
                        accion = {row.riesgoEscala.accion} 
                        color = {row.riesgoEscala.color}
                        onChangeRow = {actualizarInformacionHandler}
                        onChangeColor = {actualizarColorEscalaRiesgo}
                        id = {index}
                        key = {index}/>
                </Col>
          </Row>)
    ));


  const  crearHeaderEscalaRiesgo = () => (
    <HeaderEscalaRiesgo></HeaderEscalaRiesgo>
  );

      function cearMatrizRiesgo(informationMatrizRiesgo, informacionEscalaRiesgo, actualizarInformacionMatrizRiesgo) {
        // Creando Headers Matriz y Adicionando Empty Space al principio 
        const listaImpactos = informationMatrizRiesgo.reduce(function(acc, value){if(!acc.some(x => value.escalaImpacto === x.riesgoEscala.escala) && (value !== undefined )) acc.push(crearObjeto(value.escalaImpacto));return acc}, []);
        const listaProbabilidades = informationMatrizRiesgo.reduce(function(acc, value){if(!acc.some(x => value.escalaProbabilidad === x.riesgoEscala.escala) && (value !== undefined )) acc.push(crearObjeto(value.escalaProbabilidad)); return acc}, []);
        listaProbabilidades.unshift(crearObjeto(""));
        debugger
        var matrizRiesgo = [];
        var contadorSizeFila = 0;
        var registrosPorFila = [];
        var contadorImpacto = 0;
        crearHeadersMatrizRiesgo(listaProbabilidades, matrizRiesgo,informacionEscalaRiesgo, actualizarInformacionMatrizRiesgo);
        for(var value of informationMatrizRiesgo) {
          if(contadorSizeFila < (listaProbabilidades.length -1)) {
            registrosPorFila.push(value);
            contadorSizeFila++;
            if(contadorSizeFila === listaProbabilidades.length -1) {
              registrosPorFila.unshift(listaImpactos[contadorImpacto]);
              matrizRiesgo.push(<Row md={10} lg={10}> {crearRow(registrosPorFila, informacionEscalaRiesgo, actualizarInformacionMatrizRiesgo)}</Row>)  
              contadorImpacto++;
              contadorSizeFila = 0;
              registrosPorFila = []
            }
          }
      }
      return matrizRiesgo;
      }

      function crearHeadersMatrizRiesgo(listaProbabilidades, matrizRiesgo, informacionEscalaRiesgo, actualizarInformacionMatrizRiesgo) {
          matrizRiesgo.push(<Row> {crearRow(listaProbabilidades, informacionEscalaRiesgo, actualizarInformacionMatrizRiesgo)}</Row>)
      }

      function crearRow(informacionMatrizRiesgo,informacionEscalaRiesgo,actualizarInformacionMatrizRiesgo) {
        var fila = []
        const colores = ["#8bc34a", "#cddc39", "#ffc107", "#dd2c00", "#212121"];
        informacionMatrizRiesgo.map((value) => {
          debugger
        if(value.hasOwnProperty('escalaImpacto') && value.hasOwnProperty('escalaProbabilidad')) {
          fila.push(<Col lg={2} md={2}>
                    <Select
                    name = {value.escalaImpacto + value.escalaProbabilidad}
                    key = {value.escalaImpacto + value.escalaProbabilidad} 
                    id = {value.escalaImpacto + value.escalaProbabilidad} 
                    style={{
                      backgroundColor: value.riesgoEscala.color,
                      width: "100%"
                    }}
                    renderValue = {() => value.riesgoEscala.escala||''}
                    onChange={actualizarInformacionMatrizRiesgo}
                    input={<Input name="escala" value={value.riesgoEscala.escala||''}  id={value.escalaImpacto + value.escalaProbabilidad}/>}
                  > 
                  {informacionEscalaRiesgo.map((valoresRiesgoEscala)=> {
                    debugger
                    return (
                      <MenuItem 
                        value={valoresRiesgoEscala.riesgoEscala.color} 
                        id = {value.escalaImpacto + value.escalaProbabilidad} 
                        style={{
                        backgroundColor: valoresRiesgoEscala.riesgoEscala.color
                        }}>{valoresRiesgoEscala.riesgoEscala.escala}
                      </MenuItem>);
                  })};   
                  </Select> 
                  </Col>);

          
        } else {
          fila.push(<Col lg={2} md={2}>
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


      function crearObjeto(titulo) {
        return {
          riesgoEscala: {
            escala: titulo,
            color: "white"}
          }
      }

      function validarColorExistente(value, informacionRiesgoEscala) {
        debugger
        return !informacionRiesgoEscala.some((row) => row.riesgoEscala.color === value);
      }

      export default TablaRiesgo;
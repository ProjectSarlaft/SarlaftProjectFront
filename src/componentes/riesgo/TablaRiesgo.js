import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import crearFilaEscalaRiesgo from '../../servicios/riesgo/crearFilaEscalaRiesgo';
import DatosEscalaRiesgo from './DatosEscalaRiesgo';
import HeaderEscalaRiesgo from './HeaderEscalaRiesgo';
import HeaderInformacionMatrizRiesgo from './HeaderInformacionMatrizRiesgo';
import obtenerInformacionMatrizRiesgo from '../../servicios/riesgo/obtenerInformacionMatrizRiesgo'
import { Input } from '@material-ui/core';

class TablaRiesgo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            informacionEscalaRiesgo: [crearFilaEscalaRiesgo, crearFilaEscalaRiesgo, crearFilaEscalaRiesgo ],
            informacionMatrizRiesgo: [],
            indiceEscalaRiesgo: 3,
        }
        
        this.actualizarInformacion = this.actualizarInformacion.bind(this);
    }

    componentDidMount(){
        const informacionMatrizRiesgo =  obtenerInformacionMatrizRiesgo().then(response => this.setState({informacionMatrizRiesgo: response}));
    }


    actualizarInformacion(event) {
      const {id, name, value, checked} = event.target;
      const finalValue = value === "" ? checked : value; // Si el value es "" quiere decir que se actualizo un checkbox, por lo tanto retornaremos el checkbox.
      this.setState(prevState => {
        const informacionEscalaRiesgo = prevState.informacionEscalaRiesgo.map((row, j) => {
          if(j+"" === id) {
            return {...row, [name]: finalValue};
          } else {
            return row;
          }
        });
        return {informacionEscalaRiesgo}
      });
  };

    render() {
      const {informacionEscalaRiesgo , informacionMatrizRiesgo} = this.state;
      const listaImpactos = informacionMatrizRiesgo.reduce(function(acc, x){if(!acc[x.escalaImpacto]) acc[x.escalaImpacto] = []; acc[x.escalaImpacto].push(x); return acc}, {});
      const listaProbabilidades = informacionMatrizRiesgo.reduce(function(acc, x){if(!acc[x.escalaProbabilidad]) acc[x.escalaProbabilidad] = []; acc[x.escalaProbabilidad].push(x); return acc}, {});
      debugger
        return (
          <div>
            {crearHeaderEscalaRiesgo()}
            {escribirInformacionEscalaRiesgo(informacionEscalaRiesgo, this.actualizarInformacion)}
            {escribirInformacionMatrizRiesgo(informacionMatrizRiesgo)}
          </div>
            );
        }
      }


      const escribirInformacionEscalaRiesgo = (informacion, actualizarInformacionHandler) => (
        informacion.map( (row, index) => 
            (
            <Row>
                <Col md={3} lg={3} >
                    <DatosEscalaRiesgo 
                        escala ={row.escala} 
                        accion = {row.accion} 
                        color = {row.color}
                        onChangeRow = {actualizarInformacionHandler}
                        id = {index}
                        key = {index}/>
                </Col>
          </Row>)
    ));

    const escribirInformacionMatrizRiesgo = (informacion) => (
      informacion.map((row, index) => (
          <Col>
              <Row md={2} lg={2} >
              <Input
              name = {row.escalaImpacto}
              key = {row.escalaImpacto}
              id = {row.escalaImpacto}
              value={row.escalaImpacto||''}
              readOnly={true}>
            </Input>
            </Row>
        </Col>)
      ));
      
      function isEmpty(arg) {
        for (var item in arg) {
          return false;
        }
        return true;
      }
       
  

  const  crearHeaderEscalaRiesgo = () => (
    <HeaderEscalaRiesgo></HeaderEscalaRiesgo>
  );

    const  crearHeaderInformacionMatrizRiesgo = (listaProbabilidades) => (
        
        listaProbabilidades.map((row, index) =>
        (
        <Col>
            <Row md={2} lg={2} >
            <Input
              name = {row.escalaImpacto}
              key = {index + row.escalaImpacto}
              id = {index+ row.escalaImpacto}
              value={row.escalaImpacto||''}
              readOnly={true}>
            </Input>
            </Row>
      </Col>)));


      export default TablaRiesgo;
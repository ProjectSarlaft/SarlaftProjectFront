import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import crearFilaEscalaRiesgo from '../../servicios/riesgo/crearFilaEscalaRiesgo';
import DatosEscalaRiesgo from './DatosEscalaRiesgo';
import HeaderEscalaRiesgo from './HeaderEscalaRiesgo';
import { withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import obtenerInformacionMatrizRiesgo from '../../servicios/riesgo/obtenerInformacionMatrizRiesgo'
import { Input } from '@material-ui/core';



const styles = theme => ({
  root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
      backgroundColor: "red",
  },
  red: {
    backgroundColor: "red",
  },
  green: {
    backgroundColor: "green",
  },
  yellow: {
    backgroundColor: "yellow",
  },
});
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
      
      const items = cearMatrizRiesgo(informacionMatrizRiesgo, this.props);
     
      debugger
        return (
          <div>
              {crearHeaderEscalaRiesgo()}
              {escribirInformacionEscalaRiesgo(informacionEscalaRiesgo, this.actualizarInformacion)}
              {items}
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


  const  crearHeaderEscalaRiesgo = () => (
    <HeaderEscalaRiesgo></HeaderEscalaRiesgo>
  );

      function cearMatrizRiesgo(information, props) {
        // Creando Headers Matriz y Adicionando Empty Space al principio 
        const listaImpactos = information.reduce(function(acc, value){if(!acc.some(x => value.escalaImpacto === x.riesgoEscala.escala) && (value !== undefined )) acc.push(crearObjeto(value.escalaImpacto));return acc}, []);
        const listaProbabilidades = information.reduce(function(acc, value){if(!acc.some(x => value.escalaProbabilidad === x.riesgoEscala.escala) && (value !== undefined )) acc.push(crearObjeto(value.escalaProbabilidad)); return acc}, []);
        listaProbabilidades.unshift(crearObjeto(""));
        var matrizRiesgo = [];
        var contadorSizeFila = 0;
        var registrosPorFila = [];
        var contadorImpacto = 0;
        crearHeadersMatrizRiesgo(listaProbabilidades, matrizRiesgo, props);
        for(var value of information) {
          if(contadorSizeFila < listaImpactos.length ) {
            registrosPorFila.push(value);
            contadorSizeFila++;
            if(contadorSizeFila === listaImpactos.length) {
              registrosPorFila.unshift(listaImpactos[contadorImpacto]);
              matrizRiesgo.push(<Row md={10} lg={10}> {crearRow(registrosPorFila, props)}</Row>)  
              contadorImpacto++;
              contadorSizeFila = 0;
              registrosPorFila = []
            }
          }
      }
      return matrizRiesgo;
      }

      function crearHeadersMatrizRiesgo(listaProbabilidades, matrizRiesgo, props) {
          matrizRiesgo.push(<Row md={10} lg={10}> {crearRow(listaProbabilidades, props)}</Row>)
      }

      function crearRow(registros, props) {
        var fila = []
        var sizeMatriz = registros.length +1 ;
        const { classes } = props;
        registros.map((value, index) => {
          debugger
        fila.push(<Col md={10/sizeMatriz} lg={10/sizeMatriz}>
              <Input 
                name = {value}
                style={{
                  backgroundColor: value.riesgoEscala.color
                }}
                key = {value} 
                id = {index + value} 
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
            color: "grey"}
          }
      }


      export default withStyles(styles)(TablaRiesgo);
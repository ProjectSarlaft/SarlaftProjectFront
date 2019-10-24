import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import './../../App.css'
import { Input } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const opcionesColores = ['#2196f3', '#76ff03','#ffeb3b','#ff9800','#f44336'];
const opcionesRiesgoEscala = ['Muy Bajo', 'Bajo', 'Medio', 'Alto', 'Muy Alto'];

class DatosImpacto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            escala: this.props.escala,
            accion: this.props.accion,
            color: this.props.color,
            informacion: this.props.informacion,
            onChangeRow: props.onChangeRow,
            id: props.id,
        }
    }

    componentWillReceiveProps(nextProps) {
    
      debugger
      if(nextProps.escala !== this.props.escala) {
          this.setState({escala : nextProps.escala});
      }

      if(nextProps.accion !== this.props.accion) {
          this.setState({accion : nextProps.accion});
      }

      if(nextProps.color !== this.props.color) {
          this.setState({color : nextProps.color});
      }

      if(nextProps.informacion.length !== this.props.informacion.length) {
        this.setState({informacion : nextProps.informacion});
    }
  } 

    render() {
      debugger
      const isReadOnly = false;
      const { informacion, id, onChangeRow } = this.state;
      const { coloresSinUsar, escalasSinUsar } = encontrarElementosSinUsar(informacion);
      debugger
      return (
        <div>
            <Row>
                <Col md={3} lg={3} >
                  <Select
                    name = "escala"
                    key = {id + "escala"}
                    id = {id}
                    value = { this.state.escala||''}
                    renderValue = {() => this.state.escala||''}
                    style={{
                      width: "100%"
                    }}
                    onChange={onChangeRow}
                    input={<Input name="escala" value ={this.state.escala||''} id = {id+""} />}
                  >
                  { 
                  escalasSinUsar.map((escala)=> {
                    return (
                      <MenuItem 
                        value={escala} 
                        name = "escala"
                        id = {id}> {escala}
                      </MenuItem>);
                  })};   
                  </Select>
                </Col>
                <Col md={6} lg={6} >
                  <Input
                    name = "accion"
                    key = {id + "accion"}
                    id = {id+""}
                    value={this.state.accion||''}
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                  </Input>
                </Col>
                <Col md={3} lg={3} >
                <Select
                  name = "color"
                  key = {id + "color"}
                  id = {id+""}
                  value= {this.state.escala||''}
                  style={{
                    backgroundColor: this.state.color,
                    width: "100%"
                  }}
                  onChange={onChangeRow}
                  input={<Input name="color" value ={this.state.escala||''} id = {id+""} />}
                >
                { 
                coloresSinUsar.map((color)=> {
                  return (
                    <MenuItem 
                      value={color} 
                      name = "color"
                      id = {id}
                      style={{
                       backgroundColor: color
                      }}>
                    </MenuItem>);
                })};   
                </Select>
                </Col>
            </Row>
        </div>
          );
        }
      }

      function encontrarElementosSinUsar(informacion) {
        const coloresSinUsar = opcionesColores.filter(color => !informacion.some(riesgoEscala => riesgoEscala.color == color));
        const escalasSinUsar = opcionesRiesgoEscala.filter(escala => !informacion.some(riesgoEscala => riesgoEscala.escala == escala));

        return {
          coloresSinUsar: coloresSinUsar,
          escalasSinUsar: escalasSinUsar
        };
      }

      export default DatosImpacto;
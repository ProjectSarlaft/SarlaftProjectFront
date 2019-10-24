import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import './../../App.css'
import { Input } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const coloresDisponibles = ['#2196f3', '#76ff03','#ffeb3b','#ff9800','#f44336'];


class DatosImpacto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            escala: this.props.escala,
            accion: this.props.accion,
            color: this.props.color,
            coloresActuales: this.props.colores,
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

      if(nextProps.colores !== this.props.colores) {
        this.setState({colores : nextProps.colores});
    }
  } 

    render() {
      const isReadOnly = false;
      const { coloresActuales, id, onChangeRow } = this.state;
      
      return (
        <div>
            <Row>
                <Col md={3} lg={3} >
                  <Input
                    name = "escala"
                    key = {id + "escala"}
                    id = {id+""}
                    value={this.state.escala||''}
                    onChange={onChangeRow}
                    readOnly={true}>
                  </Input>
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
                  id = {"4"}
                  value= {this.state.escala||''}
                  style={{
                    backgroundColor: this.state.color,
                    width: "100%"
                  }}
                  onChange={onChangeRow}
                  input={<Input name="color" value ={this.state.escala||''} id = {id+""} />}
                >
                {this.state.coloresActuales.map((color)=> {
                  return (
                    <MenuItem 
                      value={color.color} 
                      name = "color"
                      id = {id}
                      style={{
                       backgroundColor: color.color
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
      export default DatosImpacto;
import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './../../App.css'
import { Checkbox } from '@material-ui/core';

class FactoresRiesgo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            riesgoCliente: false,
            riesgoProductos: false,
            riesgoDistribucion: false,
            riesgoJurisdiccion: false,
            id: props.id,
            isReadOnly: props.isReadOnly,
            onChangeRow: props.onChangeRow,
        }
    }

    componentWillReceiveProps(nextProps) {
      debugger
      if(nextProps.riesgoCliente !== this.props.riesgoCliente) {
          this.setState({riesgoCliente : nextProps.riesgoCliente});
      }

      if(nextProps.riesgoProductos !== this.props.riesgoProductos) {
          this.setState({riesgoProductos : nextProps.riesgoProductos});
      }

      if(nextProps.riesgoDistribucion !== this.props.riesgoDistribucion) {
          this.setState({riesgoDistribucion : nextProps.riesgoDistribucion});
      }

      if(nextProps.riesgoJurisdiccion !== this.props.riesgoJurisdiccion) {
        this.setState({riesgoJurisdiccion : nextProps.riesgoJurisdiccion});
    }
  }

    render() {
        const {isReadOnly, id, onChangeRow } = this.state;
      return (
        <div>
            <Row>
              <Col  md={3} lg={3} >  
                <FormControlLabel
                control ={
                <Checkbox
                    name = "riesgoCliente"
                    id = {id+""}
                    key = {id + "riesgoCliente"}
                    checked = {this.state.riesgoCliente}
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                </Checkbox>
                }
                label="Cliente"
                labelPlacement="bottom"
              />
              </Col>
              <Col  md={3} lg={3} > 
                <FormControlLabel
                control ={
                 <Checkbox 
                    name = "riesgoProductos"
                    id = {id+""}
                    key = {id + "riesgoProductos"}
                    checked = {this.state.riesgoProductos}
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                </Checkbox>
                }
                label="Productos"
                labelPlacement="bottom"
              />
              </Col>
              <Col  md={3} lg={3} > 
                <FormControlLabel 
                 control = {
                <Checkbox
                    name = "riesgoDistribucion"
                    id = {id+""}
                    key = {id + "riesgoDistribucion"}
                    checked = {this.state.riesgoDistribucion}   
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                </Checkbox>
                 }
                 label="Distribucion"
                 labelPlacement="bottom"
               />
              </Col>
              
              <Col md={3} lg={3} > 
              <FormControlLabel
                control={
                <Checkbox 
                    name = "riesgoJurisdiccion"
                    id = {id+""}
                    key = {id + "riesgoJurisdiccion"}
                    checked = {this.state.riesgoJurisdiccion}   
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                </Checkbox>
              }
                label="Jurisdiccion"
                labelPlacement="bottom"
              />
              </Col>
            </Row>
        </div>
          );
        }
      }
      export default FactoresRiesgo;
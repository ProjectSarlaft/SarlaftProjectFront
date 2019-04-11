import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './../../App.css'
import { Checkbox } from '@material-ui/core';

class FactoresRiesgo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            riesgoCliente: props.riesgoCliente,
            riesgoProductos: props.riesgoProductos,
            riesgoDistribucion: props.riesgoDistribucion,
            riesgoJurisdiccion: props.riesgoJurisdiccion,
            id: props.id,
            isReadOnly: props.isReadOnly,
            onChangeRow: props.onChangeRow,
        }
    }
    render() {
        const { riesgoCliente, riesgoProductos, riesgoDistribucion, riesgoJurisdiccion, isReadOnly, id, onChangeRow } = this.state;
      return (
        <div>
            <Row>
              <Col  md={3} lg={3} > 
                
                <FormControlLabel
                control ={
                <Checkbox
                    name = "riesgoCliente"
                    id = {id}
                    defaultValue={riesgoCliente}   
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
                    id = {id}
                    defaultValue={riesgoProductos}  
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
                    id = {id}
                    defaultValue={riesgoDistribucion}   
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
                    id = {id}
                    defaultValue={riesgoJurisdiccion}   
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
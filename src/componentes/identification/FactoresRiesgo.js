import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import './../../App.css'

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
                <Switch
                    name = "riesgoCliente"
                    id = {id}
                    defaultValue={riesgoCliente}   
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                </Switch>
                }
                label="Cliente"
                labelPlacement="bottom"
              />
              </Col>
              <Col  md={3} lg={3} > 
                <FormControlLabel
                control ={
                 <Switch 
                    
                    name = "riesgoProductos"
                    id = {id}
                    defaultValue={riesgoProductos}   
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                </Switch>
                }
                label="Productos"
                labelPlacement="bottom"
              />
              </Col>
              <Col  md={3} lg={3} > 
                <FormControlLabel 
                 control = {
                <Switch
                    name = "riesgoDistribucion"
                    id = {id}
                    defaultValue={riesgoDistribucion}   
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                </Switch>
                 }
                 label="Distribucion"
                 labelPlacement="bottom"
               />
              </Col>
              
              <Col md={3} lg={3} > 
              <FormControlLabel
                control={
                <Switch 
                    name = "riesgoJurisdiccion"
                    id = {id}
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                </Switch>
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
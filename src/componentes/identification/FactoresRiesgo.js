import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
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
                <input 
                    className="cell" 
                    name = "riesgoCliente"
                    id = {id}
                    defaultValue={riesgoCliente}   
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                </input>
              </Col>
              <Col  md={3} lg={3} > 
                <input 
                    className="cell" 
                    name = "riesgoProductos"
                    id = {id}
                    defaultValue={riesgoProductos}   
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                </input>
              </Col>
              <Col  md={3} lg={3} > 
                <input 
                    className="cell" 
                    name = "riesgoDistribucion"
                    id = {id}
                    defaultValue={riesgoDistribucion}   
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                </input>
              </Col>
              <Col md={3} lg={3} > 
                <input 
                    className="cell" 
                    name = "riesgoJurisdiccion"
                    id = {id}
                    defaultValue={riesgoJurisdiccion}   
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                </input>
              </Col>
            </Row>
        </div>
          );
        }
      }
      export default FactoresRiesgo;
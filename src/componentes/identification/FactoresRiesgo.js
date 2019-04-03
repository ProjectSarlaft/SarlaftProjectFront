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
            editable: props.editable,
        }
    }
    render() {
        const { riesgoCliente, riesgoProductos, riesgoDistribucion, riesgoJurisdiccion, editable } = this.state;
      return (
        <div>
            <Row>
                <Col  md={3} lg={3} className="cell" contenteditable={editable}>{riesgoCliente}</Col>
                <Col  md={3} lg={3} className="cell" contenteditable={editable}>{riesgoProductos}</Col>
                <Col  md={3} lg={3} className="cell" contenteditable={editable}>{riesgoDistribucion}</Col>
                <Col  md={3} lg={3} className="cell" contenteditable={editable}>{riesgoJurisdiccion}</Col>
            </Row>
        </div>
          );
        }
      }
      export default FactoresRiesgo;
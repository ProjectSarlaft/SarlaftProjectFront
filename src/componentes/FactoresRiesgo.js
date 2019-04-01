import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';

class FactoresRiesgo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            riesgoCliente: props.riesgoCliente,
            riesgoProductos: props.riesgoProductos,
            riesgoDistribucion: props.riesgoDistribucion,
            riesgoJurisdiccion: props.riesgoJurisdiccion,
        }
    }
    render() {
        const { riesgoCliente, riesgoProductos, riesgoDistribucion, riesgoJurisdiccion } = this.state;
      return (
        <div>
            <Row>
                <Col  md={3} lg={3} >{riesgoCliente}</Col>
                <Col  md={3} lg={3} >{riesgoProductos}</Col>
                <Col md={3} lg={3} >{riesgoDistribucion}</Col>
                <Col md={3} lg={3} >{riesgoJurisdiccion}</Col>
            </Row>
        </div>
          );
        }
      }
      export default FactoresRiesgo;
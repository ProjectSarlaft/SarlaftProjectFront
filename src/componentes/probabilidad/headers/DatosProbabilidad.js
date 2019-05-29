import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import { Input } from '@material-ui/core';

class DatosProbabilidad extends Component {

    render() {
      const isReadOnly = true;
      return (
        <div>
        <Row className="rowContent">
            <Col md={2} lg={2} >
              <Input
                name = "escala"
                value="Escala"
                readOnly={isReadOnly}>
              </Input>
            </Col>
            <Col md={2} lg={2} >
              <Input
                name = "nivel"
                value="Nivel"
                readOnly={isReadOnly}>
              </Input>
            </Col>
            <Col md={8} lg={8} >
              <Input
                name = "posibilidadAnual"
                value="Posibilidad Anual"
                readOnly={isReadOnly}>
              </Input>
            </Col>
        </Row>
    </div>
          );
        }
      }
      export default DatosProbabilidad;
import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import { Input } from '@material-ui/core';

class HeaderEscalaRiesgo extends Component {

    render() {
      const isReadOnly = true;
      return (
        <div>
        <Row className="rowContent">
            <Col md={3} lg={3} >
              <Input
                name = "escala"
                value="Escala"
                readOnly={isReadOnly}>
              </Input>
            </Col>
            <Col md={6} lg={6} >
              <Input
                name = "accion"
                value="Accion"
                readOnly={isReadOnly}>
              </Input>
            </Col>
            <Col md={3} lg={3} >
              <Input
                name = "color"
                value="Color"
                readOnly={isReadOnly}>
              </Input>
            </Col>
        </Row>
    </div>
          );
        }
      }
      export default HeaderEscalaRiesgo;
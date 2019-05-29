import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import './../../App.css'
import { Input } from '@material-ui/core';

class HeaderTablaProbabilidad extends Component {
    render() {
      const isReadOnly = true;
      return (
        <div>
            <Row className="rowContent">
                <Col md={1} lg={1} >
                  <Input
                    name = "escala"
                    value="Escala"
                    readOnly={isReadOnly}>
                  </Input>
                </Col>
                <Col md={1} lg={1} >
                  <Input
                    name = "nivel"
                    value="Nivel"
                    readOnly={isReadOnly}>
                  </Input>
                </Col>
                <Col md={4} lg={4} >
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
      export default HeaderTablaProbabilidad;
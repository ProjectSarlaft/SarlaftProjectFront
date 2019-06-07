import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import { Input } from '@material-ui/core';

class DatosImpacto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            escala: props.escala,
            nivel: props.nivel,
            afectacionEconomica: props.afectacionEconomica,
        }
    }
    render() {
      const isReadOnly = true;
      const { escala, nivel, afectacionEconomica } = this.state;
      return (
        <div>
            <Row>
                <Col md={3} lg={3} >
                  <Input
                    name = "escala"
                    value={escala}
                    readOnly={isReadOnly}>
                  </Input>
                </Col>
                <Col md={2} lg={2} >
                  <Input
                    name = "nivel"
                    value={nivel}
                    readOnly={isReadOnly}>
                  </Input>
                </Col>
                <Col md={7} lg={7} >
                  <Input
                    name = "afectacionEconomica"
                    value={afectacionEconomica}
                    readOnly={isReadOnly}>
                  </Input>
                </Col>
            </Row>
        </div>
          );
        }
      }
      export default DatosImpacto;
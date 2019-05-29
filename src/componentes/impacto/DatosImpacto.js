import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import './../../App.css'
import { Input } from '@material-ui/core';

class DatosImpacto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            escala: props.escala,
            nivel: props.nivel,
            afectacionEconomica: props.afectacionEconomica,
            riesgoLegal: props.riesgoLegal,
            riesgoOperativo: props.riesgoOperativo,
            riesgoContagio: props.riesgoContagio,
            riesgoReputacional: props.riesgoReputacional,
            onChangeRow: props.onChangeRow,
            id: props.id,
        }
    }
    render() {
      const isReadOnly = false;
      const { escala, nivel, afectacionEconomica, id, onChangeRow } = this.state;
      return (
        <div>
            <Row>
                <Col md={3} lg={3} >
                  <Input
                    name = "escala"
                    id = {id}
                    defaultValue={escala}
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                  </Input>
                </Col>
                <Col md={2} lg={2} >
                  <Input
                    name = "nivel"
                    type = "number"
                    id = {id}
                    defaultValue={nivel}
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                  </Input>
                </Col>
                <Col md={7} lg={7} >
                  <Input
                    name = "afectacionEconomica"
                    id = {id}
                    defaultValue={afectacionEconomica}
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                  </Input>
                </Col>
            </Row>
        </div>
          );
        }
      }
      export default DatosImpacto;
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
            posibilidadAnual: props.posibilidadAnual,
            onChangeRow: props.onChangeRow,
            id: props.id,
        }
    }
    render() {
      const isReadOnly = false;
      const { escala, nivel, posibilidadAnual, id, onChangeRow } = this.state;
      return (
        <div>
            <Row className="rowContent">
                <Col md={2} lg={2} >
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
                    id = {id}
                    defaultValue={nivel}
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                  </Input>
                </Col>
                <Col md={8} lg={8} >
                  <Input
                    name = "posibilidadAnual"
                    id = {id}
                    defaultValue={posibilidadAnual}
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
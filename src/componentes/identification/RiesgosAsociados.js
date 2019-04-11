import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import './../../App.css'
import { FormControlLabel, Checkbox } from '@material-ui/core';

class RiesgosAsociados extends Component {
    constructor(props) {
        super(props);
        this.state = {
            riesgoLegal: props.riesgoLegal,
            riesgoOperativo: props.riesgoOperativo,
            riesgoContagio: props.riesgoContagio,
            riesgoReputacional: props.riesgoReputacional,
            isReadOnly: props.isReadOnly,
            onChangeRow: props.onChangeRow,
            id: props.id,
        }
    }
    render() {
      const { riesgoLegal, riesgoOperativo, riesgoContagio, riesgoReputacional, isReadOnly, id, onChangeRow } = this.state;
      return (
        <div>
            <Row className="rowContent">
                <Col md={3} lg={3} >
                  <FormControlLabel
                  control = {
                  <Checkbox
                    name = "riesgoLegal"
                    id = {id}
                    defaultValue={riesgoLegal}
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                  </Checkbox>
                  }
                  label="Legal"
                  labelPlacement="bottom"
                  className="formControllLabel"
                />
                </Col>
                <Col md={3} lg={3} >
                  <FormControlLabel
                  control = {
                  <Checkbox
                    name = "riesgoOperativo"
                    id = {id}
                    defaultValue={riesgoOperativo}
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                  </Checkbox>
                  }
                  label="Operativo"
                  labelPlacement="bottom"
                />
                </Col>
                <Col md={3} lg={3} >
                  <FormControlLabel 
                  control = {
                  <Checkbox
                    name = "riesgoReputacional"
                    id = {id}
                    defaultValue={riesgoReputacional}
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                 </Checkbox>
                  }
                  label="Reputacional"
                  labelPlacement="bottom"
                />
                </Col>
                <Col md={3} lg={3} >
                  <FormControlLabel 
                  control ={
                  <Checkbox
                    name = "riesgoContagio"
                    id = {id}
                    defaultValue={riesgoContagio}
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                  </Checkbox>
                  }
                  label="Contagio"
                  labelPlacement="bottom"
                />
                </Col>
            </Row>
        </div>
          );
        }
      }
      export default RiesgosAsociados;
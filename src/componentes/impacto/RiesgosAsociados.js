import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import './../../App.css'
import { Input } from '@material-ui/core';

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
                  <Input
                    name = "riesgoLegal"
                    id = {id}
                    defaultValue={riesgoLegal}
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                  </Input>
                </Col>
                <Col md={3} lg={3} >
                  <Input
                     name = "riesgoOperativo"
                     id = {id}
                     defaultValue={riesgoOperativo}
                     onChange={onChangeRow}
                     readOnly={isReadOnly}>
                  </Input>
                </Col>
                <Col md={3} lg={3} >
                  <Input
                      name = "riesgoReputacional"
                      id = {id}
                      defaultValue={riesgoReputacional}
                      onChange={onChangeRow}
                      readOnly={isReadOnly}>
                  </Input>
                </Col>
                <Col md={3} lg={3} >
                  <Input
                     name = "riesgoContagio"
                     id = {id}
                     defaultValue={riesgoContagio}
                     onChange={onChangeRow}
                     readOnly={isReadOnly}>
                  </Input>
                </Col>
            </Row>
        </div>
          );
        }
      }
      export default RiesgosAsociados;
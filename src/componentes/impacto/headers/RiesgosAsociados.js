import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import { Input } from '@material-ui/core';

class RiesgosAsociados extends Component {
    constructor(props) {
        super(props);
        this.state = {
            riesgoLegal: props.riesgoLegal,
            riesgoOperativo: props.riesgoOperativo,
            riesgoContagio: props.riesgoContagio,
            riesgoReputacional: props.riesgoReputacional,
        }
    }
    render() {
      const { riesgoLegal, riesgoOperativo, riesgoContagio, riesgoReputacional} = this.state;
      const isReadOnly = true;
      return (
        <div>
            <Row className="rowContent">
                <Col md={3} lg={3} >
                  <Input
                    name = "riesgoLegal"
                    value={riesgoLegal}
                    readOnly={isReadOnly}>
                  </Input>
                </Col>
                <Col md={3} lg={3} >
                  <Input
                     name = "riesgoOperativo"
                     value={riesgoOperativo}
                     readOnly={isReadOnly}>
                  </Input>
                </Col>
                <Col md={3} lg={3} >
                  <Input
                      name = "riesgoReputacional"
                      value={riesgoReputacional}
                      readOnly={isReadOnly}>
                  </Input>
                </Col>
                <Col md={3} lg={3} >
                  <Input
                     name = "riesgoContagio"
                     value={riesgoContagio}
                     readOnly={isReadOnly}>
                  </Input>
                </Col>
            </Row>
        </div>
          );
        }
      }
      export default RiesgosAsociados;
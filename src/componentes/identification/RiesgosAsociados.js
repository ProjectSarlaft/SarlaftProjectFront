import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';

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
        const { riesgoLegal, riesgoOperativo, riesgoContagio, riesgoReputacional } = this.state;
      return (
        <div>
            <Row>
                <Col  md={3} lg={3} >{riesgoLegal}</Col>
                <Col  md={3} lg={3} >{riesgoOperativo}</Col>
                <Col md={3} lg={3} >{riesgoContagio}</Col>
                <Col md={3} lg={3} >{riesgoReputacional}</Col>
            </Row>
        </div>
          );
        }
      }
      export default RiesgosAsociados;
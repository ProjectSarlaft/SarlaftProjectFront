import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import './../../App.css'

class RiesgosAsociados extends Component {
    constructor(props) {
        super(props);
        this.state = {
            riesgoLegal: props.riesgoLegal,
            riesgoOperativo: props.riesgoOperativo,
            riesgoContagio: props.riesgoContagio,
            riesgoReputacional: props.riesgoReputacional,
            editable: props.editable,
        }
    }
    render() {
      const { riesgoLegal, riesgoOperativo, riesgoContagio, riesgoReputacional, editable } = this.state;
      return (
        <div>
            <Row>
                <Col md={3} lg={3} className="cell" contenteditable={editable}>{riesgoLegal}</Col>
                <Col md={3} lg={3} className="cell" contenteditable={editable}>{riesgoOperativo}</Col>
                <Col md={3} lg={3} className="cell" contenteditable={editable}>{riesgoContagio}</Col>
                <Col md={3} lg={3} className="cell" contenteditable={editable}>{riesgoReputacional}</Col>
            </Row>
        </div>
          );
        }
      }
      export default RiesgosAsociados;
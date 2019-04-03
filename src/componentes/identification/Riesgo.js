import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import './../../App.css'

class Riesgo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            riesgo: props.riesgo,
            proceso: props.proceso,
            descripcion: props.descripcion,
            editable: props.editable
        }
    }
    render() {
        const { riesgo, proceso, descripcion, editable } = this.state;
      return (
<div>
    <Row>
        <Col  md={4} lg={4} className="cell" contenteditable={editable}>{riesgo}</Col>
        <Col  md={4} lg={4} className="cell" contenteditable={editable}>{proceso}</Col>
        <Col  md={4} lg={4} className="cell" contenteditable={editable}>{descripcion}</Col>
    </Row>
</div>
      );
    }
  }
  export default Riesgo;
  
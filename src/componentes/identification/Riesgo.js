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
            id: props.id,
            isReadOnly: props.isReadOnly,
            onChangeRow: props.onChangeRow,
        }
    }

    render() {
        const { onChangeRow, id, riesgo, proceso, descripcion, isReadOnly } = this.state;
      return (
          
        <Row >
            <Col md={4} lg={4}  >
                <input 
                    className="cell"
                    name = "riesgo"
                    id = {id}
                    defaultValue={riesgo}
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                </input>
            </Col>
            <Col  md={4} lg={4} >
                <input 
                    className="cell" 
                    name = "proceso"
                    id = {id}
                    defaultValue={proceso}
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                </input>
            </Col> 
            <Col  md={4} lg={4} > 
                <input 
                    className="cell" 
                    name = "descripcion"
                    id = {id}
                    defaultValue={descripcion}   
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                </input>
            </Col>
        </Row>
      );
    }
  }


  
  export default Riesgo;
  
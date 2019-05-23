import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
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
        debugger
        const { onChangeRow, id, riesgo, proceso, descripcion, isReadOnly } = this.state;
      return (
          
        <Row >
            <Col md={3} lg={3}  >
                <Input 
                    name = "riesgo"
                    id = {id}
                    defaultValue={riesgo}
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                </Input>
            </Col>
            <Col  md={3} lg={3} >
                <Input 
                    name = "proceso"
                    id = {id}
                    defaultValue={proceso}
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                </Input>
            </Col> 
            <Col  md={6} lg={6} > 
                <Input 
                    name = "descripcion"
                    id = {id}
                    defaultValue={descripcion}   
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                </Input>
            </Col>
        </Row>
      );
    }
  }


  
  export default Riesgo;
  
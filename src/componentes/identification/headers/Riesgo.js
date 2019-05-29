import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import Input from '@material-ui/core/Input';

class Riesgo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            riesgo: props.riesgo,
            proceso: props.proceso,
            descripcion: props.descripcion,
        }
    }
 
    render() {
      const isReadOnly = true;  
      const {riesgo, proceso, descripcion} = this.state;
      return (
          
        <Row >
            <Col md={3} lg={3}  >
                <Input 
                    name = "riesgo"
                    value={riesgo}
                    readOnly={isReadOnly}>
                </Input>
            </Col>
            <Col  md={3} lg={3} >
                <Input 
                    name = "proceso"
                    value={proceso}
                    readOnly={isReadOnly}>
                </Input>
            </Col> 
            <Col  md={6} lg={6} > 
                <Input 
                    name = "descripcion"
                    value={descripcion}   
                    readOnly={isReadOnly}>
                </Input>
            </Col>
        </Row>
      );
    }
  }


  
  export default Riesgo;
  
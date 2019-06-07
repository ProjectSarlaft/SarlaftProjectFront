import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import Input from '@material-ui/core/Input';

class FactoresRiesgo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            riesgoCliente: props.riesgoCliente,
            riesgoProductos: props.riesgoProductos,
            riesgoDistribucion: props.riesgoDistribucion,
            riesgoJurisdiccion: props.riesgoJurisdiccion,
        }
    }

   

    render() {
        const {riesgoCliente, riesgoProductos, riesgoDistribucion, riesgoJurisdiccion } = this.state;
        const isReadOnly = true;
      return (
        <div>
            <Row>
              <Col  md={3} lg={3} >  
                <Input
                    name = "riesgoCliente"
                    value = {riesgoCliente}
                    readOnly={isReadOnly}>
                </Input>
              </Col>
              <Col  md={3} lg={3} > 
                 <Input 
                    name = "riesgoProductos"
                    value = {riesgoProductos}
                    readOnly={isReadOnly}>
                </Input>

              </Col>
              <Col  md={3} lg={3} > 
                <Input
                    name = "riesgoDistribucion"
                    value = {riesgoDistribucion}   
                    readOnly={isReadOnly}>
                </Input>
              </Col>
              <Col md={3} lg={3} > 
                <Input 
                    name = "riesgoJurisdiccion"
                    value = {riesgoJurisdiccion}   
                    readOnly={isReadOnly}>
                </Input>
              </Col>
            </Row>
        </div>
          );
        }
      }
      export default FactoresRiesgo;
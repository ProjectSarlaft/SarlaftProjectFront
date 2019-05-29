import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import  Riesgo from './headers/Riesgo';
import  FactoresRiesgo from './headers/FactoresRiesgo';
import  RiesgosAsociados from './headers/RiesgosAsociados';

class TablaIdentificacionHeader extends Component {
     render() {
      return (
        <div>
          {mostrarHeader()}
        </div>
          );
        }
      }

    const mostrarHeader = () => (
        <Row>
            <Col md={4} lg={4}>
                <Riesgo
                    riesgo = "Riesgo" 
                    proceso = "Proceso"
                    descripcion = "Descripcion"/>
            </Col>
            <Col md={3} lg={3} >
                <RiesgosAsociados
                    riesgoLegal ="R. Legal" 
                    riesgoOperativo = "R. Operativo" 
                    riesgoContagio = "R. Contagio" 
                    riesgoReputacional = "R. Reputacional"/>
            </Col>
            <Col md={3} lg={3} >
                <FactoresRiesgo 
                    riesgoCliente = "R. Cliente"
                    riesgoProductos = "R. Productos"
                    riesgoDistribucion = "R. Distribucion"
                    riesgoJurisdiccion = "R. Jurisdiccion"/>
            </Col> 
            <Col md={2} lg={2} >
              <Input 
                  name = "Acciones"
                  value="Acciones"   
                  readOnly={true}>
              </Input>
            </Col>                         
        </Row>
        );
export default TablaIdentificacionHeader;
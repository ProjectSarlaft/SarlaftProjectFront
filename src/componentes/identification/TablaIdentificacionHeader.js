import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import Riesgo from './Riesgo';
import RiesgosAsociados from './RiesgosAsociados';
import FactoresRiesgo from './FactoresRiesgo';

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
            <Col md={3} lg={3}>
                <Riesgo
                    riesgo = "Riesgo" 
                    proceso = "Proceso"
                    descripcion = "Descripcion"
                    isReadOnly = {true}/>
            </Col>
            <Col md={4} lg={4} >
                <RiesgosAsociados
                    riesgoLegal ="R. Legal" 
                    riesgoOperativo = "R. Operativo" 
                    riesgoContagio = "R. Contagio" 
                    riesgoReputacional = "R. Reputacional"
                    isReadOnly = {true}/>
                    
            </Col>
            <Col md={4} lg={4} >
                <FactoresRiesgo 
                    riesgoCliente = "R. Cliente"
                    riesgoProductos = "R. Productos"
                    riesgoDistribucion = "R. Distribucion"
                    riesgoJurisdiccion = "R. Jurisdiccion"
                    isReadOnly = {true}/>
            </Col>                     
        </Row>
        );
export default TablaIdentificacionHeader;
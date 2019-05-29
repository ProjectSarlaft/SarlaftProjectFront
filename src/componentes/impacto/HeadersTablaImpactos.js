import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import DatosImpacto from './headers/DatosImpacto';
import RiesgosAsociados from './headers/RiesgosAsociados';

class HeadersTablaImpactos extends Component {

    render() {
      return (
        <div>
          {crearHeaders()}
        </div>
          );
        }
      }

      const crearHeaders = () => (
            <Row>
                <Col md={3} lg={3} >
                    <DatosImpacto 
                        escala ="Escala" 
                        nivel = "Nivel"
                        afectacionEconomica = "Afectacion Economica"/>
                </Col>
                <Col md={6} lg={6} >
                    <RiesgosAsociados
                        riesgoLegal = "R. Legal"
                        riesgoOperativo = "R. Operativo"
                        riesgoContagio = "R. Contagio"
                        riesgoReputacional = "R. Reputacional"/>
                </Col>
          </Row>
    );
      export default HeadersTablaImpactos;
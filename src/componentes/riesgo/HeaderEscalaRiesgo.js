import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import './../../App.css'
import HeaderEscalaRiesgo from './headers/HeaderEscalaRiesgo';

class HeaderTablaProbabilidad extends Component {
    render() {
      return (
        <div>
            <Row >
                <Col md={4} lg={4} >
                  <HeaderEscalaRiesgo></HeaderEscalaRiesgo>
                </Col>
            </Row>
        </div>
          );
        }
      }
      export default HeaderTablaProbabilidad;
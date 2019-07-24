import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import './../../App.css'
import HeaderEscalaRiesgo from './headers/HeaderEscalaRiesgo';

class HeaderTablaProbabilidad extends Component {
    render() {
      return (
        <div>
            <Row >
                <Col md={3} lg={3} >
                  <HeaderEscalaRiesgo></HeaderEscalaRiesgo>
                </Col>
            </Row>
        </div>
          );
        }
      }
      export default HeaderTablaProbabilidad;
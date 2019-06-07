import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import './../../App.css'
import { Input } from '@material-ui/core';
import DatosProbabilidad from './headers/DatosProbabilidad';

class HeaderTablaProbabilidad extends Component {
    render() {
      return (
        <div>
            <Row >
                <Col md={4} lg={4} >
                  <DatosProbabilidad></DatosProbabilidad>
                </Col>
                <Col md={1} lg={1} >
                  <Input
                  name = "acciones"
                  value="Acciones"
                  readOnly={true}>
              </Input>
                </Col>
            </Row>
        </div>
          );
        }
      }
      export default HeaderTablaProbabilidad;
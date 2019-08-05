import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import { Input } from '@material-ui/core';

class HeaderEscalaRiesgo extends Component {

    constructor(props) {
      super(props);
      this.state = {
          listaProbabilidades: [],
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.listaProbabilidades !== this.props.listaProbabilidades) {
        this.setState({listaProbabilidades : nextProps.listaProbabilidades});
    }
}

    render() {
      const isReadOnly = true;
      const probabilidades = this.state.listaProbabilidades;
      debugger
      return (
        <Row className="rowContent">
        {crearPrimerCampoVacio()}
        {listarProbabilidades(probabilidades)}
        </Row>
        
          );
        }
      }

      const  crearPrimerCampoVacio = () => (
        <Col md={2} lg={2} >
          <Input
            name = "campoVacio"
            value="campoVacio"
            readOnly={true}>
          </Input>
      </Col>
      );

      const  listarProbabilidades = (probabilidades) => (
        probabilidades.map( (row, index) => (
        <Col md={2} lg={2} >
          <Input
            name = "campoVacio"
            value="campoVacio"
            readOnly={true}>
          </Input>
    </Col>
        )
       )
      );
    
      export default HeaderEscalaRiesgo;
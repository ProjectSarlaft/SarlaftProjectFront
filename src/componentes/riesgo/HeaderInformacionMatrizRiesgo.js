import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import './../../App.css'
import DatosInformacionMatrizRiesgo from './headers/DatosInformacionMatrizRiesgo';


class HeaderInformacionMatrizRiesgo extends Component {

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
      const {listaProbabilidades} = this.state;
      return (
        <div>
            <Row >
                <Col md={3} lg={3} >
                  <DatosInformacionMatrizRiesgo
                      listaProbabilidades = {listaProbabilidades}
                  ></DatosInformacionMatrizRiesgo>
                </Col>
            </Row>
        </div>
          );
        }
      }
      export default HeaderInformacionMatrizRiesgo;
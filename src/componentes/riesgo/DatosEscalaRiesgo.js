import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import './../../App.css'
import { Input } from '@material-ui/core';

class DatosImpacto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            escala: "",
            accion: "",
            color: "",
            onChangeRow: props.onChangeRow,
            id: props.id,
        }
    }

    componentWillReceiveProps(nextProps) {
    
      if(nextProps.escala !== this.props.escala) {
          this.setState({escala : nextProps.escala});
      }

      if(nextProps.accion !== this.props.accion) {
          this.setState({accion : nextProps.accion});
      }

      if(nextProps.color !== this.props.color) {
          this.setState({color : nextProps.color});
      }
  } 

    render() {
      const isReadOnly = false;
      const { id, onChangeRow } = this.state;
      return (
        <div>
            <Row>
                <Col md={3} lg={3} >
                  <Input
                    name = "escala"
                    key = {id + "escala"}
                    id = {id+""}
                    value={this.state.escala||''}
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                  </Input>
                </Col>
                <Col md={6} lg={6} >
                  <Input
                    name = "accion"
                    key = {id + "accion"}
                    id = {id+""}
                    value={this.state.accion||''}
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                  </Input>
                </Col>
                <Col md={3} lg={3} >
                  <Input
                    name = "color"
                    key = {id + "color"}
                    id = {id+""}
                    value={this.state.color||''}
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                  </Input>
                </Col>
            </Row>
        </div>
          );
        }
      }
      export default DatosImpacto;
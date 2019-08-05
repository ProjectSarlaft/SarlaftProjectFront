import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import './../../App.css'
import { Input } from '@material-ui/core';

class DatosProbabilidad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            escala: props.escala,
            nivel: props.nivel,
            posibilidadAnual: props.posibilidadAnual,
            onChangeRow: props.onChangeRow,
            id: props.id,
        }
    }

    componentWillReceiveProps(nextProps) {
    
      if(nextProps.escala !== this.props.escala) {
          this.setState({escala : nextProps.escala});
      }

      if(nextProps.nivel !== this.props.nivel) {
          this.setState({nivel : nextProps.nivel});
      }

      
      if(nextProps.posibilidadAnual !== this.props.posibilidadAnual) {
          this.setState({posibilidadAnual : nextProps.posibilidadAnual});
      }
  }

    render() {
      const isReadOnly = false;
      const { id, onChangeRow } = this.state;
      return (
        <div>
            <Row className="rowContent">
                <Col md={2} lg={2} >
                  <Input
                    name = "escala"
                    id = {id+""}
                    key = {id + "rowContent"}
                    value={this.state.escala||''}
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                  </Input>
                </Col>
                <Col md={2} lg={2} >
                  <Input
                    name = "nivel"
                    id = {id+""}
                    key = {id + "nivel"}
                    value={this.state.nivel||''}
                    type="number"
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                  </Input>
                </Col>
                <Col md={8} lg={8} >
                  <Input
                    name = "posibilidadAnual"
                    id = {id+""}
                    key = {id + "posibilidadAnual"}
                    value={this.state.posibilidadAnual||''}
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                  </Input>
                </Col>
            </Row>
        </div>
          );
        }
      }
      export default DatosProbabilidad;
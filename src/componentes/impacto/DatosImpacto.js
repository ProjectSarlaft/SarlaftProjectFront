import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import './../../App.css'
import { Input } from '@material-ui/core';

class DatosImpacto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            escala: "",
            nivel: "",
            afectacionEconomica: "",
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

      if(nextProps.afectacionEconomica !== this.props.afectacionEconomica) {
          this.setState({afectacionEconomica : nextProps.afectacionEconomica});
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
                <Col md={2} lg={2} >
                  <Input
                    name = "nivel"
                    key = {id + "nivel"}
                    type = "number"
                    InputProps={{ inputProps: { min: 0, max: 10 } }}
                    id = {id+""}
                    value={this.state.nivel||''}
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                  </Input>
                </Col>
                <Col md={7} lg={7} >
                  <Input
                    name = "afectacionEconomica"
                    key = {id + "afectacionEconomica"}
                    id = {id+""}
                    value={this.state.afectacionEconomica||''}
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
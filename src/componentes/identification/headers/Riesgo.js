import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import './../../App.css'

class Riesgo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            riesgo: "",
            proceso: "",
            descripcion: "",
            id: props.id,
            isReadOnly: props.isReadOnly,
            onChangeRow: props.onChangeRow,
        }
    }

    componentWillReceiveProps(nextProps) {
    
        if(nextProps.riesgo !== this.props.riesgo) {
            this.setState({riesgo : nextProps.riesgo});
        }

        if(nextProps.proceso !== this.props.proceso) {
            this.setState({proceso : nextProps.proceso});
        }

        
        if(nextProps.descripcion !== this.props.descripcion) {
            this.setState({descripcion : nextProps.descripcion});
        }
    }

    render() {
        debugger
        const { onChangeRow, id, isReadOnly } = this.state;
      return (
          
        <Row >
            <Col md={3} lg={3}  >
                <Input 
                    name = "riesgo"
                    key = {id + "riesgo"}
                    id = {id+""}
                    value={this.state.riesgo||''}
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                </Input>
            </Col>
            <Col  md={3} lg={3} >
                <Input 
                    name = "proceso"
                    key = {id + "proceso"}
                    id = {id+""}
                    value={this.state.proceso}
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                </Input>
            </Col> 
            <Col  md={6} lg={6} > 
                <Input 
                    name = "descripcion"
                    key = {id + "descripcion"}
                    id = {id+""}
                    value={this.state.descripcion}   
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                </Input>
            </Col>
        </Row>
      );
    }
  }


  
  export default Riesgo;
  
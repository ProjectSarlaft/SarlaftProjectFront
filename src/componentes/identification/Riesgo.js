import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import './../../App.css'

class Riesgo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            riesgo: props.riesgo,
            proceso: props.proceso,
            descripcion: props.descripcion,
            isReadOnly: props.isReadOnly,
        }
        console.log(this.state);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {value, name} = event.target;
            this.setState({
              [name]: value
            });
        
        console.log(event.target.value);
        
      }

    render() {
        const { riesgo, proceso, descripcion, isReadOnly } = this.state;
        console.log(this.state)
      return (
        <Row>
            <Col md={4} lg={4}  >
                <input 
                    className="cell"
                    type="text"
                    name="riesgo"
                    value={riesgo}
                    onChange={this.handleChange}
                    readOnly={isReadOnly}>
                </input>
            </Col>
            <Col  md={4} lg={4} >
                <input 
                    className="cell" 
                    type="text"
                    name = "proceso"
                    value={proceso}
                    onChange={this.handleChange}
                    readOnly={isReadOnly}>
                </input>
            </Col> 
            <Col  md={4} lg={4} > 
                <input 
                    className="cell" 
                    type="text"
                    name="descripcion"   
                    value={descripcion}   
                    onChange={this.handleChange}
                    readOnly={isReadOnly} >
                </input>
            </Col>
        </Row>
      );
    }
  }


  
  export default Riesgo;
  
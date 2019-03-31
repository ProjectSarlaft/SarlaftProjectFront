
import { Grid, Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';

class Riesgo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            riesgo: props.riesgo,
            proceso: props.proceso,
            descripcion: props.descripcion,
        }
    }
    render() {
        const { riesgo, proceso, descripcion } = this.state;
      return (
    
<div>
<Row>
  <Col  md={4} lg={4} >{riesgo}</Col>
  <Col  md={4} lg={4} >{proceso}</Col>
  <Col md={4} lg={4} >{descripcion}</Col>
</Row>

</div>
    

      );
    }
  }
  
  export default Riesgo;
  
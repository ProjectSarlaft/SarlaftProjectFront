import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import Riesgo from './Riesgo';
import RiesgosAsociados from './RiesgosAsociados';
import FactoresRiesgo from './FactoresRiesgo';

class TablaIdentificacion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            informacion: props.informacion
        }
    }
 
    render() {
      return (
        <div>
          {strToComponents(this.state.informacion)}
        </div>
          );
        }
      }

      const strToComponents = (information) => (
        information.map( (row) => 
            (
            <Row>
                <Col md={3} lg={3}>
                    <Riesgo 
                        riesgo = {row.riesgo} 
                        proceso = {row.proceso}
                        descripcion = {row.descripcion}
                        key = {row.riesgo}
                        isReadOnly = {row.isReadOnly} />
                </Col>
                <Col md={4} lg={4} >
                    <RiesgosAsociados 
                        riesgoLegal ={row.riesgoLegal} 
                        riesgoOperativo = {row.riesgoOperativo} 
                        riesgoContagio = {row.riesgoContagio} 
                        riesgoReputacional = {row.riesgoReputacional}
                        key = {row.riesgo} 
                        editable = {row.editable} />
                </Col>
                <Col md={4} lg={4} >
                    <FactoresRiesgo 
                        riesgoCliente = {row.riesgoCliente}
                        riesgoProductos = {row.riesgoProductos}
                        riesgoDistribucion = {row.riesgoDistribucion}
                        riesgoJurisdiccion = {row.riesgoJurisdiccion}
                        key = {row.riesgo}
                        editable = {row.editable} />
                </Col>                     
          </Row>)
    ));
      export default TablaIdentificacion;
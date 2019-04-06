import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import Riesgo from './Riesgo';
import RiesgosAsociados from './RiesgosAsociados';
import FactoresRiesgo from './FactoresRiesgo';

class TablaIdentificacion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            informacion: props.informacion,
            actualizarInformacionHandler : props.actualizarInformacionHandler,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      this.state.actualizarInformacionHandler(event);
    };
 
    render() {
      const {informacion} = this.props;
      return (
        <div>
          {strToComponents(informacion, this.handleChange)}
        </div>
          );
        }
      }

      const strToComponents = (informacion, handler) => (
        informacion.map( (row, index) => 
            (
            <Row>
                <Col md={3} lg={3}>
                    <Riesgo 
                        riesgo = {row.riesgo} 
                        proceso = {row.proceso}
                        descripcion = {row.descripcion}
                        id = {index}
                        key = {index + row.riesgo + row.proceso + row.descripcion}                    
                        isReadOnly = {row.isReadOnly}
                        onChangeRow = {handler} />
                </Col>
                <Col md={4} lg={4} >
                    <RiesgosAsociados 
                        riesgoLegal ={row.riesgoLegal} 
                        riesgoOperativo = {row.riesgoOperativo} 
                        riesgoContagio = {row.riesgoContagio} 
                        riesgoReputacional = {row.riesgoReputacional}
                        key = {row.riesgo + "sisas"} 
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
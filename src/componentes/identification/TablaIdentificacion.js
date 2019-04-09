import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import Riesgo from './Riesgo';
import RiesgosAsociados from './RiesgosAsociados';
import FactoresRiesgo from './FactoresRiesgo';
import EditarYBorrarEventos from './EditarYBorrarEventos';


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
                <Col md={4} lg={4}>
                    <Riesgo 
                        riesgo = {row.riesgo} 
                        proceso = {row.proceso}
                        descripcion = {row.descripcion}
                        id = {index}
                        key = {index}                    
                        isReadOnly = {row.isReadOnly}
                        onChangeRow = {handler} />
                </Col>
                <Col md={3} lg={3} >
                    <RiesgosAsociados 
                        riesgoLegal ={row.riesgoLegal} 
                        riesgoOperativo = {row.riesgoOperativo} 
                        riesgoContagio = {row.riesgoContagio} 
                        riesgoReputacional = {row.riesgoReputacional}
                        id = {index}
                        key = {index}                    
                        isReadOnly = {row.isReadOnly}
                        onChangeRow = {handler} />
                </Col>
                <Col md={3} lg={3} >
                    <FactoresRiesgo 
                        riesgoCliente = {row.riesgoCliente}
                        riesgoProductos = {row.riesgoProductos}
                        riesgoDistribucion = {row.riesgoDistribucion}
                        riesgoJurisdiccion = {row.riesgoJurisdiccion}
                        id = {index}
                        key = {index}                    
                        isReadOnly = {row.isReadOnly}
                        onChangeRow = {handler} />
                </Col>   
                <Col md={2} lg={2}>
                  <EditarYBorrarEventos></EditarYBorrarEventos>
                </Col>                  
          </Row>)
    ));
      export default TablaIdentificacion;
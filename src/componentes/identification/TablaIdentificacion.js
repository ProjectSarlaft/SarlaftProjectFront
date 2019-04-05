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
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      const {id, name, value} = event.target;
      
      this.setState(prevState => {
        const informacion = this.state.informacion;
        informacion[id][name] = value;
        return {informacion}
      });
      
      
      
      /* this.setState(prevState => {
        debugger
        const informacion = prevState.informacion.slice();
        informacion[id][name] = value;
        return {informacion}
      });*/ 
      
      //this.setState({
       // informacion
     // })
      console.log("this is the id");
      console.log(id, name, value);
    };
 
    render() {
      console.log(this)
      return (
        <div>
          {strToComponents(this.state.informacion, this.handleChange)}
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
                        key = {index + row.riesgo}                    
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
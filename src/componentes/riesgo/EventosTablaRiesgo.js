import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import './../../App.css'

class EventosTablaImpacto extends Component {
    constructor(props) {
        super(props);
        this.state = {
          eliminarRiesgoEscalaHandler: props.eliminarRiesgoEscalaHandler,
          id: props.id,
          value: props.value,

        }
    }

    render() {
        const { id, eliminarRiesgoEscalaHandler, value } = this.state;
        debugger
      return (
          
        <Row >
            <Col md={3} lg={3}  >
            <IconButton
                onClick={eliminarRiesgoEscalaHandler}
                name = "delete"
                value= {value}
                id = {id}>
                <DeleteIcon fontSize="small" />
            </IconButton>
            </Col>
        </Row>
      );
    }
  }


  
  export default EventosTablaImpacto;
  
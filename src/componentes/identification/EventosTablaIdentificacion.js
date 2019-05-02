import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import './../../App.css'

class EventosTablaIdentificacion extends Component {
    constructor(props) {
        super(props);
        this.state = {
          eventHandler: props.eventHandler,
          id: props.id,
        }
    }

    render() {
        const { id, eventHandler } = this.state;
      return (
          
        <Row >
            <Col md={3} lg={3}  >
            <IconButton 
              aria-label="Delete" 
              class="distancia" 
              size="small" 
              onClick={eventHandler}
              name = "delete"
              id = {id}
              >
                 <DeleteIcon  />
            </IconButton>
            </Col>
            <Col  md={3} lg={3} >
            <IconButton class="distancia" size="small">
                 <EditIcon />
            </IconButton>
            </Col> 
        </Row>
      );
    }
  }


  
  export default EventosTablaIdentificacion;
  
import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import './../../App.css'

class EventosTablaImpacto extends Component {
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
              className="distancia" 
              size="small" 
              onClick={eventHandler}
              name = "delete"
              id = {id}
              >
            <DeleteIcon />
            </IconButton>
            </Col>
        </Row>
      );
    }
  }


  
  export default EventosTablaImpacto;
  
import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import './../../App.css'
import { Input } from '@material-ui/core';

class RiesgosAsociados extends Component {
    constructor(props) {
        super(props);
        this.state = {
            riesgoLegal: "",
            riesgoOperativo: "",
            riesgoContagio: "",
            riesgoReputacional: "",
            isReadOnly: props.isReadOnly,
            onChangeRow: props.onChangeRow,
            id: props.id,
        }
    }

    
    componentWillReceiveProps(nextProps) {
    
      if(nextProps.riesgoLegal !== this.props.riesgoLegal) {
          this.setState({riesgoLegal : nextProps.riesgoLegal});
      }

      if(nextProps.riesgoOperativo !== this.props.riesgoOperativo) {
          this.setState({riesgoOperativo : nextProps.riesgoOperativo});
      }

      if(nextProps.riesgoContagio !== this.props.riesgoContagio) {
          this.setState({riesgoContagio : nextProps.riesgoContagio});
      }

      if(nextProps.riesgoReputacional !== this.props.riesgoReputacional) {
        this.setState({riesgoReputacional : nextProps.riesgoReputacional});
    }
  }  

    render() {
      const {  isReadOnly, id, onChangeRow } = this.state;
      return (
        <div>
            <Row className="rowContent">
                <Col md={3} lg={3} >
                  <Input
                    name = "riesgoLegal"
                    key = {id + "riesgoLegal"}
                    id = {id+""}
                    value={this.state.riesgoLegal}
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                  </Input>
                </Col>
                <Col md={3} lg={3} >
                  <Input
                     name = "riesgoOperativo"
                     key = {id + "riesgoLegal"}
                     id = {id+""}
                     value={this.state.riesgoOperativo||''}
                     onChange={onChangeRow}
                     readOnly={isReadOnly}>
                  </Input>
                </Col>
                <Col md={3} lg={3} >
                  <Input
                      name = "riesgoReputacional"
                      key = {id + "riesgoLegal"}
                      id = {id+""}
                      value={this.state.riesgoReputacional||''}
                      onChange={onChangeRow}
                      readOnly={isReadOnly}>
                  </Input>
                </Col>
                <Col md={3} lg={3} >
                  <Input
                     name = "riesgoContagio"
                     key = {id + "riesgoLegal"}
                     id = {id+""}
                     value={this.state.riesgoContagio||''}
                     onChange={onChangeRow}
                     readOnly={isReadOnly}>
                  </Input>
                </Col>
            </Row>
        </div>
          );
        }
      }
      export default RiesgosAsociados;
import {Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import './../../App.css'
import { FormControlLabel, Checkbox } from '@material-ui/core';

class RiesgosAsociados extends Component {
    constructor(props) {
        super(props);
        this.state = {
            riesgoLegal: false,
            riesgoOperativo: false,
            riesgoContagio: false,
            riesgoReputacional: false,
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
      const { isReadOnly, id, onChangeRow } = this.state;
      return (
        <div>
            <Row className="rowContent">
                <Col md={3} lg={3} >
                  <FormControlLabel
                  control = {
                  <Checkbox
                    name = "riesgoLegal"
                    id = {id+""}
                    key = {id + "riesgoLegal"}
                    checked = {this.state.riesgoLegal}
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                  </Checkbox>
                  }
                  label="Legal"
                  labelPlacement="bottom"
                  className="formControllLabel"
                />
                </Col>
                <Col md={3} lg={3} >
                  <FormControlLabel
                  control = {
                  <Checkbox
                    name = "riesgoOperativo"
                    id = {id+""}
                    key = {id + "riesgoOperativo"}
                    checked = {this.state.riesgoOperativo}
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                  </Checkbox>
                  }
                  label="Operativo"
                  labelPlacement="bottom"
                />
                </Col>
                <Col md={3} lg={3} >
                  <FormControlLabel 
                  control = {
                  <Checkbox
                    name = "riesgoReputacional"
                    id = {id+""}
                    key = {id + "riesgoReputacional"}
                    checked = {this.state.riesgoReputacional}
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                 </Checkbox>
                  }
                  label="Reputacional"
                  labelPlacement="bottom"
                />
                </Col>
                <Col md={3} lg={3} >
                  <FormControlLabel 
                  control ={
                  <Checkbox
                    name = "riesgoContagio"
                    id = {id+""}
                    key = {id + "riesgoContagio"}
                    checked = {this.state.riesgoContagio}
                    onChange={onChangeRow}
                    readOnly={isReadOnly}>
                  </Checkbox>
                  }
                  label="Contagio"
                  labelPlacement="bottom"
                />
                </Col>
            </Row>
        </div>
          );
        }
      }
      export default RiesgosAsociados;
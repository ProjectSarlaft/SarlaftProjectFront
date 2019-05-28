import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TablaIdentificacion from './componentes/identification/TablaIdentificacion';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TablaProbabilidad from './componentes/probabilidad/TablaProbabilidad';
import TablaImpactos from './componentes/impacto/TablaImpactos';
import './App.css';

const options = [
  'Identificacion',
  'Control',
  'Medicion',
  'Monitoreo',];

  const ITEM_HEIGHT = 48;

class App extends Component {
  constructor() {
    super();
    this.state = { 
      anchorEl: null,
    }
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
 
  render() {
    const { anchorEl } = this.state;
    debugger
    const open = Boolean(anchorEl);
    return (
    <Grid>
      <Row>
        <AppBar position='sticky'>
          <Toolbar>
            <IconButton
              aria-label="More"
              aria-owns={open ? 'long-menu' : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}
            > 
               <MoreVertIcon />
            </IconButton>
            <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {options.map(option => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
            <Typography  lg={3} variant='title' color='inherit'>
              Sarlaft
            </Typography>
          </Toolbar>
        </AppBar>
      </Row>
      <Row>
        <Col md={12} lg={12}>
          <div>

          {/*<TablaIdentificacion>
          </TablaIdentificacion>*/}

            <TablaProbabilidad>
            </TablaProbabilidad> 

             <TablaImpactos>
            </TablaImpactos>
          </div>
        </Col>
      </Row>
    </Grid>
    );
  }
}

export default App;




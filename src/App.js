import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import TablaIdentificacion from './componentes/identification/TablaIdentificacion';
import TablaImpactos from './componentes/impacto/TablaImpactos';
import TablaProbabilidad from './componentes/probabilidad/TablaProbabilidad';
import TablaRiesgo from './componentes/riesgo/TablaRiesgo';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
}));

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Identificacion" />
          <Tab label="Impacto" />
          <Tab label="Probabilidad" />
          <Tab label="Riesgo" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer><TablaIdentificacion></TablaIdentificacion></TabContainer>}
      {value === 1 && <TabContainer><TablaImpactos></TablaImpactos></TabContainer>}
      {value === 2 && <TabContainer><TablaProbabilidad></TablaProbabilidad></TabContainer>}
      {value === 3 && <TabContainer><TablaRiesgo></TablaRiesgo></TabContainer>}
    </div>
  );
}

export default App;
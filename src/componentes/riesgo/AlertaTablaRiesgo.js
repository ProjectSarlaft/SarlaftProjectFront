import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AlertaTablaRiesgo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: props.open,
            text: props.text,
            handleClose: props.handleClose,
        }
    }

    componentWillReceiveProps(nextProps) {
    
      if(nextProps.open !== this.props.open) {
          this.setState({open : nextProps.open});
      }

      if(nextProps.text !== this.props.text) {
          this.setState({text : nextProps.text});
      }
  } 

  render() {
    const { text, open, handleClose} = this.state; 
    return (
        <div>
           <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Alerta!"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
                {text}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Acepto
            </Button>
          </DialogActions>
          </Dialog>
          </div>
    );
  }
}

export default AlertaTablaRiesgo;
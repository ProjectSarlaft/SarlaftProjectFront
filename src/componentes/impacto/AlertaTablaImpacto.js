import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AlertaTablaImpacto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open,
            text: this.props.text,
        }
    }

componentWillReceiveProps(nextProps) {
    this.setState({
        open: nextProps.open,
        text: nextProps.text,
    });
    }  

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.text === "") {
        return false
    } else {
        return true;
    }
  }

  handleClose = () => {
    this.setState({ 
        open: false,
        text: "",
     });
  };

  render() {
    const { text, open} = this.state; 
    return (
        <div>
           <Dialog
          open={open}
          onClose={this.handleClose}
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
            <Button onClick={this.handleClose} color="primary">
              Acepto
            </Button>
          </DialogActions>
          </Dialog>
          </div>
    );
  }
}

export default AlertaTablaImpacto;
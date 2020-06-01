import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="frontend-challenge" />
                    <TextField 
                        hintText = "Enter Your Name"
                        floatingLabelText = "Name"
                        onChange = { handleChange('name') }
                        defaultValue = { values.name }
                    />
                    <br />
                    <TextField 
                        hintText = "Enter Your Age"
                        floatingLabelText = "Age"
                        onChange = { handleChange('age') }
                        defaultValue = { values.age }
                        maxlength = "2"
                    />
                    <br />
                    <RaisedButton 
                        label = "Continue"
                        primary = {true}
                        onClick = {this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
           
        )   
    }
}


export default FormUserDetails;
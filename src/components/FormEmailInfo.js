import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export class FormEmailInfo extends Component {

    handleChange = (event, index, value) => this.setState({ value });

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {

        const { values, handleChange } = this.props;        
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="frontend-challenge" />
                    <TextField 
                        hintText = "Enter Your Email"
                        floatingLabelText = "Email"
                        onChange = { handleChange('email') }
                        defaultValue = { values.email }
                    />
                    <br />
                    <SelectField
                        floatingLabelText="Newsletter"
                        value={values.newsletter}
                        onChange = {handleChange('newsletter')}
                        
                    >
                    <MenuItem value={'daily'} primaryText="Daily" />
                    <MenuItem value={'weekly'} primaryText="Weekly" />
                    <MenuItem value={'monthly'} primaryText="Monthly" />
                    </SelectField>
                    <br />
                    <RaisedButton 
                        label = "Continue"
                        primary = { true }
                        onClick = { this.continue }
                    /> &nbsp;
                    <RaisedButton 
                        label = "Back"
                        primary = { false }
                        onClick = { this.back }
                    />
                </React.Fragment>
            </MuiThemeProvider>
           
        )   
    }
}

export default FormEmailInfo;
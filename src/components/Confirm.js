import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import { createUser } from '../sdk/index.ts';

export class Confirm extends Component {

    continue = e => {
        const details = this.props.values;

        createUser(details)
        .then(function(value) {
            console.log(value);
            e.preventDefault();
        }, function(reason) {
            console.log(reason); 
        });
    
        this.props.nextStep();
        
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { name, age, email, newsletter } } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data" />
                    <List>
                        <ListItem 
                            primaryText = "Name"
                            secondaryText = { name }
                        />
                        <ListItem 
                            primaryText = "Age"
                            secondaryText = { age }
                        />
                        <ListItem 
                            primaryText = "Email"
                            secondaryText = { email }
                        />
                        <ListItem 
                            primaryText = "Newsletter"
                            secondaryText = { newsletter }
                        />
                    </List>
                    
                    <br />
                    <RaisedButton 
                        label = "Confirm & Continue"
                        primary = { true }
                        styles = { styles.button }
                        onClick = { this.continue }
                    /> 
                    &nbsp;
                    <RaisedButton 
                        label = "Back"
                        primary = { false }
                        styles = { styles.button }
                        onClick = { this.back }
                    />
                </React.Fragment>
            </MuiThemeProvider>
           
        )   
    }
}

const styles ={
    button: {
        margin: 15
    }
}

export default Confirm;
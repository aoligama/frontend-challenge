import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormEmailInfo from './FormEmailInfo';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {

    state = {
        step: 1,
        name: '',
        age: '',
        email: '',
        newsletter: 'daily',
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        
        if( input === 'newsletter' ){
            this.setState({[input]: e.target.innerText.toLowerCase()});
        } else{
            this.setState({[input]: e.target.value});
        }   
    }

    render() {
        const { step } = this.state;
        const { name, age, email, newsletter } = this.state;
        const values = { name, age, email, newsletter };

        switch (step) {
            case 1:
                return (
                    <FormUserDetails 
                        nextStep = { this.nextStep }
                        handleChange = { this.handleChange }
                        values = { values }
                    />
                )
            case 2:
                return (
                    <FormEmailInfo 
                        nextStep = { this.nextStep }
                        prevStep = { this.prevStep }
                        handleChange = { this.handleChange }
                        values = { values }
                    />
                )
            case 3:
                return (
                    <Confirm
                        nextStep = { this.nextStep }
                        prevStep = { this.prevStep }
                        values = { values }
                    />
                )
            case 4:
                return <Success />
                
            default:
                return (
                    <FormUserDetails 
                        nextStep = { this.nextStep }
                        handleChange = { this.handleChange }
                        values = { values }
                    />
                )
        }
    }
}

export default UserForm;
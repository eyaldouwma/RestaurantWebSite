import React from 'react';
import Header from './Header';
import validator from 'validator';
import './Contact.css';

class Contact extends React.Component {


    state = {
        nameField: '',
        phoneField: '',
        emailField: '',
        messageArea: '',
        phoneIncorrect: false,
        emailIncorrect: false,
        messageAreaBlank: false,
        success: false
    }

    nameChange = (event) => {
        this.setState({nameField: event.target.value})
    }

    phoneChange = (event) => {
        this.setState({phoneField: event.target.value})
    }

    emailChange = (event) => {
        this.setState({emailField: event.target.value})
    }

    messageChange = (event) => {
        this.setState({messageArea: event.target.value})
    }

    okPressed = () => {
        this.setState({success:false});
    }

    handleSubmit = () => {
       
        let phoneIncorrect = false;
        let emailIncorrect = false;
        let messageAreaBlank = false;
        if(!validator.isMobilePhone(this.state.phoneField,'he-IL'))
        {
            phoneIncorrect = true;
        }
        if (!validator.isEmail(this.state.emailField))
        {
            emailIncorrect = true;
        }
        if (this.state.messageArea==='')
        {
            messageAreaBlank = true;
        }

        if (messageAreaBlank===false && phoneIncorrect===false && emailIncorrect===false)
        {
            this.setState({
                phoneIncorrect: phoneIncorrect,
                emailIncorrect: emailIncorrect,
                messageAreaBlank: messageAreaBlank,
                phoneField: '',
                emailField: '',
                nameField: '',
                messageArea: '',
                success: true
            })
        }
        this.setState({
            phoneIncorrect: phoneIncorrect,
            emailIncorrect: emailIncorrect,
            messageAreaBlank: messageAreaBlank
        })

    }

    render() {
        let phoneIssue = <label className='error-label right'>Incorrect phone format</label>
        let emailIssue = <label className='error-label right'>Incorrect email format</label>
        let messageBlank = <label className='error-label left'>Please write something</label>
        let successMessage =<div className='success-background'>
                                <div className='success-box'>
                                    <span className='success-title'>Thank You For Contacting Us!</span>
                                    <div className='ok-btn' onClick={this.okPressed}>
                                        <span className='ok-text'>Ok</span>
                                    </div>
                                </div>
                            </div>
        return (
            <div className='contact-container'>
                <Header/>
                <div className='form-container'>
                    <div className='left-container'>
                        <span className='contact-title'>Contact us:</span>
                        <textarea className='textarea-input' name='messageArea' value={this.state.messageArea} placeholder='Type your message here' onChange={this.messageChange}/>
                        {this.state.messageAreaBlank && messageBlank}
                        <input type='submit' onClick={this.handleSubmit} className='submit-btn'/>
                    </div>
                    <div className='right-container'>
                        <input type='text' name='nameField' value={this.state.nameField} className='text-input' placeholder="*Name" onChange={this.nameChange}/>
                        <input type='text' name='phoneField' value={this.state.phoneField} className='text-input' placeholder="*Phone" onChange={this.phoneChange}/>
                        {this.state.phoneIncorrect && phoneIssue}
                        <input type='text' name='emailField' value={this.state.emailField} className='text-input' placeholder="*E-mail" onChange={this.emailChange}/>
                        {this.state.emailIncorrect && emailIssue}
                    </div>
                </div>
                {this.state.success && successMessage}
            </div>
        )
    }
}

export default Contact;
import React from 'react';
import Header from './Header';
import './Contact.css';

class Contact extends React.Component {


    state = {

    }

    render() {
        return (
            <div className='contact-container'>
                <Header/>
                <div className='form-container'>
                    <div className='left-container'>
                        <span>Contact us:</span>
                        <textarea className='textarea-input' placeholder='Type your message here'/>
                        <input type='submit' value='Send' className='submit-btn'/>
                    </div>
                    <div className='right-container'>
                        <input type='text' className='text-input' placeholder="*Name"/>
                        <input type='text' className='text-input' placeholder="*Phone"/>
                        <input type='text' className='text-input' placeholder="*E-mail"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
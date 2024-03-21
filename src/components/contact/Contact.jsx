import React from 'react'
import "./contact.scss";
export default function Contact() {
    return (
        <div id='contact'>
            <h2>CONTACT US</h2>
            <div className="container">
                <div className='form'>
                    <div className="form-item">
                        <label>Name</label>
                        <input type='text' placeholder='Enter your name' name='name' />
                    </div>
                    <div className="form-item">
                        <label>Email</label>
                        <input type='email' placeholder='Enter your Emal' name='email' />
                        
                    </div>
                    <div className="form-item">
                        <label>Message</label>
                        <textarea  className="textarea" placeholder='Write your message here.'>

                        </textarea>
                        
                    </div>
                    <div className='form-item'>
                        <button> Submit </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import "./contact.scss";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdMarkEmailUnread } from "react-icons/md";
export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here
        // For example, you can send the form data to your backend server
        console.log("Form submitted with data:", { name, email, message });
        alert("Successfully Submitted...")
        // You can also reset the form fields after submission
        setName('');
        setEmail('');
        setMessage('');
    };

    const handleWhatsAppClick = () => {
        const whatsappLink = `https://wa.me/${+9779807256843}`;
        window.open(whatsappLink, '_blank');
    };

    const handleEmailClick = () => {
        window.location.href = 'mailto:contactwithsikendar@gmail.com';
    };

    return (
        <div id='contact'>
            <h2>CONTACT US</h2>
            <div className="container">
                <form className='form' onSubmit={handleSubmit}>

                    <div className="form-item">
                        <label>Name</label>
                        <input type='text' placeholder='Enter your name'
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                            required />
                    </div>
                    <div className="form-item">
                        <label>Email</label>
                        <input type='email' placeholder='Enter your Emal'
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />

                    </div>
                    <div className="form-item">
                        <label>Message</label>
                        <textarea className="textarea" placeholder='Write your message here.' id="message"
                            value={message}
                            onChange={handleMessageChange}
                            required>
                        </textarea>

                    </div>
                    <div className='form-item'>
                        <button type='submit'> Submit </button>
                    </div>
                    <div className="line"></div>

                    <div className="icon">
                        <button type="button" className='btn' onClick={handleWhatsAppClick}>
                            <IoLogoWhatsapp />
                        </button>
                    </div>
                    <div className="icon">
                        <button type="button" className='btn' onClick={handleEmailClick}>
                            <MdMarkEmailUnread />
                        </button>
                    </div>

                </form>
            </div>
        </div >
    )
}

import React from 'react';
import './Contact.css'
import { BiMailSend } from "react-icons/bi";
const Contact = () => {
    return (
        <div className=''>
            <span class="resume-bold-title">Contact</span>
            <div className='Contact'>
              <div className='contactPage'>
                <div className='contactBox'>
                   <div className='icon'>
                    <BiMailSend/>
                    <h2>Drop your message at</h2>
                   </div>
                   <a href="#">shihab90.it@gmail.com</a>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Contact;
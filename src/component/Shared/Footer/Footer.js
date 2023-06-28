import React from 'react';
import './footer.css'
import { AiFillGithub,AiFillLinkedin,AiOutlineWhatsApp } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
const Github = (
  <Tooltip id="tooltip" className='tooltip'>
   Github
  </Tooltip>
);
const LinkedIn  = (
  <Tooltip id="tooltip" className='tooltip'>
   LinkedIn 
  </Tooltip>
);
const WhatsApp = (
  <Tooltip id="tooltip" className='tooltip'>
   WhatsApp
  </Tooltip>
);
const Mail = (
  <Tooltip id="tooltip" className='tooltip'>
   Mail
  </Tooltip>
);
const Footer = () => {
    return (
        <div>
            <div className='footer'>
              <div className='left-side '>
              <p className='copy-right'>© 2023 by MD Makshudul haque.</p>
              </div>
              <div className='right-side'>
                <h3>Follow</h3>
                <div className='social-icon'>
                    <ul>
                    <OverlayTrigger  placement="top"  arrowOffsetLeft overlay={Github}>
                    <li ><AiFillGithub/></li>
                    </OverlayTrigger>
                    <OverlayTrigger  placement="top"  arrowOffsetLeft overlay={LinkedIn }>
                    <li ><AiFillLinkedin/></li>
                    </OverlayTrigger>
                    <OverlayTrigger  placement="top"  arrowOffsetLeft overlay={WhatsApp }>
                    <li ><AiOutlineWhatsApp/></li>
                    </OverlayTrigger>
                    <OverlayTrigger  placement="top"  arrowOffsetLeft overlay={Mail }>
                    <li ><HiMail/></li>
                    </OverlayTrigger>
                    </ul>
                    
                </div>
              </div>
            </div>
        </div>
    );
};

export default Footer;
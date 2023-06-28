import React from 'react';
import './Home.css'
import image from '../../component/image/Shihab.jpg'
import { AiFillGithub,AiFillLinkedin,AiOutlineWhatsApp } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
const Home = () => {
    return (
        <div>
            <div className='home-page'>
              <div className='home-pageBox'>
                <div className='profile'>
                   <div className='profile-body'>
                      <div className='profile-image'>
                          <img src={image}></img>
                      </div>
                      <div class="profile-into">
                        <h3>Md Makshudul Haque</h3>
                        <p>Frontend Developer</p><p>JavaScript | React | Vue | Angular</p>
                      </div>
                   </div>
                   <div className='profile-footer'>
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
                <div className="home-intro">
                  <div className="intro-head">
                    <h2>Hello</h2>
                    <span>A Bit About Me</span>
                    </div>
                    <div className="intro-button">
                      <a className="btn resume"> <Link className='btn-resumelink' to="/resume">Resume</Link></a>
                      <a className="btn projects" ><Link className='btn-projectlink' to="/project">Project</Link></a>
                      </div>
                      <div className="intro-desc">
                        <p>A Frontend guy located in Bangladesh who loves to code and play with colors. In the last 10 years most of the time, I spent with code and design. The core skill is maintaining and Building client-side applications / software / websites using HTML, JavaScript, React, Vue, and Angular.</p>
                    </div>
                 </div>
              </div>
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import './Resume.css'
import image from '../../component/image/Shihab.jpg'
import { AiFillLinkedin } from "react-icons/ai";
import { HiMail,HiPhone } from "react-icons/hi";
const Resume = () => {
    return (
        <div>
            <div className='Resume'>
            <span className="resume-bold-title">Resume</span>
             <div className='resume-page'>
               <div className='resume-wrap'>
                 <div className='resume-single-item'>
                  <div className="resume-head">
                    <h3>Profile</h3>
                    <a href='' className='btn-downlaod-resume'>Download Resume</a>
                    </div>
                  <div className='resume-box'>
                     <div className='profile-image'>
                        <img src={image}></img>
                     </div>
                     <div className='profile-desc'>
                            <div className="profile-desc-head mb-4">
                                <h3>Md Makshudul Haque</h3>
                                <h5>Frontend Developer</h5>
                              </div>
                            <div className="profile-desc-body">
                                <div className="profile-item">
                                    <p>// Contact</p>
                                    <ul>
                                        <li>
                                             <HiMail  className="icon"/> 
                                           <span>shihab90.it@gmail.com</span>
                                        </li>
                                        <li>
                                        <AiFillLinkedin  className="icon"/> 
                                           <span>Md Makshudul Haque</span>
                                        </li>
                                        <li>
                                        <HiPhone  className="icon"/> 
                                           <span>+88 01796-382625</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="profile-item">
                                    <p>// Language</p>
                                    <ul>
                                        <li>
                                           <span>English</span>
                                        </li>
                                        <li>
                                           <span>Bangla </span>
                                        </li>
                                        <li>
                                           <span>Hindi</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="profile-item">
                                    <p>// Interests</p>
                                    <ul>
                                        <li>
                                           <span>Sports</span>
                                        </li>
                                        <li>
                                            <span>Photography</span>
                                        </li>
                                        <li>
                                            <span>Cycling</span>
                                        </li>
                                    </ul>
                                </div>
                       </div>
                     </div>
                  </div>
                 </div>
  
               </div>
             </div>
            </div>
        </div>
    );
};

export default Resume;
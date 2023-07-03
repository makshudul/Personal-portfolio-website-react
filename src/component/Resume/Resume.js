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
                 <div className='resume-single-item'>
                  <div className="resume-head">
                    <h3>Educations</h3>
                   </div>
                   <div className='resume-half-box'>
                     <div className='resume-box'>
                       <div class="resume-highlight">
                        <h2 class="highlight-head">Running</h2>
                        <h5 class="highlight-subhead">Dhaka International University</h5>
                        <span class="highlight-hint">Bachelor's degree</span>
                        <span class="highlight-hint">Computer Science and Engineering</span>
                        <span class="highlight-hint">Dhaka, Bangladesh</span>
                        </div>
                     </div>
                     <div className='resume-box'>
                       <div class="resume-highlight">
                        <h2 class="highlight-head">2017-2018</h2>
                        <h5 class="highlight-subhead">Bogura Polytechnic Institute</h5>
                        <span class="highlight-hint">Diploma in Engineering</span>
                        <span class="highlight-hint">Computer Science and Engineering</span>
                        <span class="highlight-hint">Dhaka, Bangladesh</span>
                        </div>
                     </div>
                  </div>
                 </div>
                 <div className='resume-single-item'>
                  <div className="resume-head">
                    <h3>Certifications</h3>
                   </div>
                   <div className='resume-half-box'>
                     <div className='resume-box'>
                       <div class="resume-highlight">
                        <h2 class="highlight-head">Running</h2>
                        <h5 class="highlight-subhead">Dhaka International University</h5>
                        <span class="highlight-hint">Bachelor's degree</span>
                        <span class="highlight-hint">Computer Science and Engineering</span>
                        <span class="highlight-hint">Dhaka, Bangladesh</span>
                        </div>
                     </div>
                     <div className='resume-box'>
                       <div class="resume-highlight">
                        <h2 class="highlight-head">2017-2018</h2>
                        <h5 class="highlight-subhead">Bogura Polytechnic Institute</h5>
                        <span class="highlight-hint">Diploma in Engineering</span>
                        <span class="highlight-hint">Computer Science and Engineering</span>
                        <span class="highlight-hint">Dhaka, Bangladesh</span>
                        </div>
                     </div>
                     <div className='resume-box'>
                       <div class="resume-highlight">
                        <h2 class="highlight-head">2017-2018</h2>
                        <h5 class="highlight-subhead">Bogura Polytechnic Institute</h5>
                        <span class="highlight-hint">Diploma in Engineering</span>
                        <span class="highlight-hint">Computer Science and Engineering</span>
                        <span class="highlight-hint">Dhaka, Bangladesh</span>
                        </div>
                     </div>
                     <div className='resume-box'>
                       <div class="resume-highlight">
                        <h2 class="highlight-head">2017-2018</h2>
                        <h5 class="highlight-subhead">Bogura Polytechnic Institute</h5>
                        <span class="highlight-hint">Diploma in Engineering</span>
                        <span class="highlight-hint">Computer Science and Engineering</span>
                        <span class="highlight-hint">Dhaka, Bangladesh</span>
                        </div>
                     </div>
                  </div>
                 </div>
                 <div className='resume-single-item'>
                  <div className="resume-head">
                    <h3>Skills & Expertise</h3>
                    </div>
                  <div className='resume-box'>
                     <div className='skills-items'>
                                <div className="skills-item">
                                    <p>// Language</p>
                                    <ul>
                                        <li>
                                           <span>JavaScript</span>
                                        </li>
                                        <li>
                                           <span>HTML</span>
                                        </li>
                                        <li>
                                           <span>CSS</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="skills-item">
                                    <p>// JS library & frameworks</p>
                                    <ul>
                                      <li>React</li>
                                      <li>jQuery</li>
                                      <li>jQuery UI</li>
                                    </ul>
                                </div>
                                <div className="skills-item">
                                    <p>// Frameworks</p>
                                    <ul>
                                      <li>Bootstrap 5</li>
                                      <li>Tailwind CSS</li>
                                      <li>React Bootstrap</li>
                                    </ul>
                                </div>
                                <div className="skills-item">
                                    <p>// Design tools</p>
                                    <ul>
                                      <li>Figma</li>
                                      <li>Photoshop</li>
                                      <li>Adobe XD</li>
                                      <li>Illustrator</li>
                                    </ul>
                                </div>
                                <div className="skills-item">
                                    <p>//  Code editors</p>
                                    <ul>
                                      <li>WebStorm</li>
                                      <li>Phpstorm</li>
                                      <li>Intellij Idea</li>
                                      <li>VS Code</li>
                                      <li>Atom</li>
                                      <li>Sublime text</li>
                                      <li>Notepad++</li>
                                    </ul>
                                </div>
                                <div className="skills-item">
                                    <p>// Tools</p>
                                    <ul>
                                      <li>GitHub</li>
                                      <li>Git</li>
                                    </ul>
                                </div>
                                <div className="skills-item">
                                    <p>// Basic working knowledge</p>
                                    <ul>
                                      <li>WordPress</li>
                                      <li>Laravel</li>
                                      <li>PHP</li>
                                      <li>MySQL</li>
                                    </ul>
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
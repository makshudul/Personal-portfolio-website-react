import React from 'react';
import './Project.css'
import stovoImage from '../../component/image/stovoo-admin.png'
import realtiveImage from '../../component/image/realtive-cv.png'
import suzukiimage from '../../component/image/suzuki.png'
const Project = () => {
    return (
        <div>
           <div className='Project'>
            <div className='project-page'>
            <span class="prpject-bold-title">Project</span>
              <div className='project-warp'>
                <div className='recent-project'>
                    <h3 className='title'>Recent Projects</h3>
                    <div className='project-shows'>
                        <div className='project-show'>
                          <div className='project-text'>
                            <div class="head">
                                <h3 class="name">Stovoo - Food Delivery System | React</h3>
                                <span class="role">Role: Frontend developer</span>
                                <span class="tech">Technology: React,React Router, SCSS</span>
                            </div>
                            <div class="desc">
                              <p>Stovoo landing page is a food delivery app showcasing landing page for stovoo mobile app. I make the front end by React, React Router, and SCSS for style.  it's mobile responsive and large devices supported. also used few third-party libraries for animation and counter.</p>
                              <a class="action" rel="noreferrer" href="//www.stovoo.com/" target="_blank">show preview</a>
                              </div>
                          </div>
                          <div className='project-image'>
                           <img src={stovoImage}></img>
                          </div>
                        </div>
                        <div className='project-show'>
                          <div className='project-text'>
                            <div class="head">
                                <h3 class="name">Stovoo - Food Delivery System | React</h3>
                                <span class="role">Role: Frontend developer</span>
                                <span class="tech">Technology: React,React Router, SCSS</span>
                            </div>
                            <div class="desc">
                              <p>Stovoo landing page is a food delivery app showcasing landing page for stovoo mobile app. I make the front end by React, React Router, and SCSS for style.  it's mobile responsive and large devices supported. also used few third-party libraries for animation and counter.</p>
                              <a class="action" rel="noreferrer" href="//www.stovoo.com/" target="_blank">show preview</a>
                              </div>
                          </div>
                          <div className='project-image'>
                           <img src={realtiveImage}></img>
                          </div>
                        </div>
                        <div className='project-show'>
                          <div className='project-text'>
                            <div class="head">
                                <h3 class="name">Stovoo - Food Delivery System | React</h3>
                                <span class="role">Role: Frontend developer</span>
                                <span class="tech">Technology: React,React Router, SCSS</span>
                            </div>
                            <div class="desc">
                              <p>Stovoo landing page is a food delivery app showcasing landing page for stovoo mobile app. I make the front end by React, React Router, and SCSS for style.  it's mobile responsive and large devices supported. also used few third-party libraries for animation and counter.</p>
                              <a class="action" rel="noreferrer" href="//www.stovoo.com/" target="_blank">show preview</a>
                              </div>
                          </div>
                          <div className='project-image'>
                           <img src={suzukiimage}></img>
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

export default Project;
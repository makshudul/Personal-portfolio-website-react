import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { BsDroplet } from "react-icons/bs";
const Header = () => {
    return (
        <div className='navbarposition'>
             <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link className='Headerlink' to="/" title='Back Home Page'><BsDroplet className='mx-3'style={{color:"#ffc25c"}}/>Md Makshudul Haque</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon bg-white"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li>
                    <Link className='link' to="/">Home</Link>
                </li>
                <li>
                    <Link className='link' to="/resume">Resume</Link>
                </li>
                <li>
                    <Link className='link' to="/project">Project</Link>
                </li>
                <li>
                    <Link className='link' to="/contact">Contact</Link>
                </li>
                </ul>

                </div>
            </div>
            </nav>
        </div>
    );
};

export default Header;
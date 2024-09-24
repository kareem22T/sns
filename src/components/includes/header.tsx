import { useState } from 'react';
import logo from './../../images/logo@1.25x.png'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <header>
            <div className="top">
                <div className="container">
                    <div className="info">
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call"
                                width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                            </svg>
                            <span>
                            +97142285285
                            </span>
                        </a>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="20"
                                height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                <path
                                    d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                            </svg>
                            <span>
                            Building A1, Dubai Digital Park, Dubai Silicon Oasis,Dubai,UAE
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <nav className={(isOpen ? 'open' : '')}>
                <div className="container">
                    <img src={logo} alt="logo" className="logo" />
                    <div className="social" style={{visibility: 'hidden'}}>
                        <a href="">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="">
                            <i className="fa-brands fa-x-twitter"></i>
                        </a>
                        <a href="">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                        <a href="">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                    <div className="links">                    
                        <a href="#home" className='active'>Home</a>
                        <a href="#services">Services</a>
                        <a href="#projects">Projects</a>
                        <a href="#insights">Insights</a>
                        <a href="#contact">Contact Us</a>
                    </div>
                    <div className="social">
                        <a href="">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="">
                            <i className="fa-brands fa-x-twitter"></i>
                        </a>
                        <a href="">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                        <a href="">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                    <button className="show_more" onClick={() => {setIsOpen(true)}}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <button className="close" onClick={() => {setIsOpen(false)}}>
                        <i className="fa-regular fa-x"></i>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header;
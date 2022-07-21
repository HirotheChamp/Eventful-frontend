import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
import {  FaEnvelope } from "react-icons/fa";




function Footer() {
    return (
        <div className="footer">
            <div className="container2">
                <div className="footer-row">
                    <div className="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li><a href="#">about us</a></li>
                            <li><a href="#">our services</a></li>
                            <li><a href="#">privacy policy</a></li>
                            <li><a href="#">affiliate program</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">shipping</a></li>
                            <li><a href="#">returns</a></li>
                            <li><a href="#">order status</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className='social-links'>
                        {/* <a href="#"><FontAwesomeIcon icon={faSpotify}/></a> */}
                        {/* <a href="#"><FontAwesomeIcon icon={faApple}/></a> */}
                        <a href="#"><FontAwesomeIcon icon={FaEnvelope}/></a>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-youtube-play"></i></a>
                        </div>
                    </div>
        </div >
        </div>
        </div>
    )
}

export default Footer
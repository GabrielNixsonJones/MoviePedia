import React from 'react';
import { LiaSmileBeam } from 'react-icons/lia'
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
import { BiLogoGmail } from 'react-icons/bi';
import { motion } from "framer-motion";

export const FooterComponent = () => {
    return (
        <div className='footerBody'>
            <footer class="footer text-light">
                <div className='footreContentContainer' style={{ border: 'none' }}>
                    <div className='ThankyouContainer'>
                        <h1 className='w-50'>MoviePedia</h1>
                        <p>Thanks for visiting MoviePedia<LiaSmileBeam className='fs-5' /></p>
                    </div>
                    <div className='linkesContainer'>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div><h4>Get In Touch</h4></div>
                            <div>
                                <ul className="social-icon fs-5 d-flex" style={{ gap: '1.5rem', justifyContent: 'space-center', fontSize: '1.5rem' }}>
                                    <li className="social-icon__item">
                                        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><BsFacebook className='mb-1' /></motion.div>
                                    </li>
                                    <li className="social-icon__item">
                                        <a style={{ textDecoration: 'none', color: 'inherit' }} href='https://github.com/GabrielNixsonJones'><motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><BsGithub className='mb-1' /></motion.div></a>
                                    </li>
                                    <li className="social-icon__item">
                                        <a style={{ textDecoration: 'none', color: 'inherit' }} href='https://www.linkedin.com/in/gabriel-nixson-jones-351b26239'><motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><BsLinkedin className='mb-1' /></motion.div></a>
                                    </li>
                                    <li className="social-icon__item">
                                        <a style={{ textDecoration: 'none', color: 'inherit' }} href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jgabigabi2001@gmail.com'><motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><BiLogoGmail className='mb-1' /></motion.div></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="waves">
                    <div class="wave" id="wave1"></div>
                    <div class="wave" id="wave2"></div>
                    <div class="wave" id="wave3"></div>
                    <div class="wave" id="wave4"></div>
                </div>
            </footer>
        </div>
    )
}

import React from 'react'
import Image from 'next/image'
// import { motion } from 'framer-motion'
import { images } from '../../constants'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Header = () => {
  return (
    <header className="header section" id="home">
      {/* <Image src={images.square1} className="shape square" alt="" /> */}
      <div className="container flex justify-between items-center mx-auto">
      <div className="showcase-info">
        <h3 className="sub-heading">Web Developer</h3>
        <h1 className="heading">Abid Al Wassie</h1>
        <p className="text">{"I'm a freelance web developer."}</p>
        <div className="cta">
          <Tippy content="Send me an Email" theme='default' placement='right' arrow={true} animation="shift-toward-subtle" duration={0}>
            <a href="mailto:abidalwassie@outlook.com" className="btn email">Contact Me</a>
          </Tippy>
          <a href={images.email} download className="btn secondary-btn">Download CV</a>
        </div>
      </div>

      <div className="showcase-img">
        <Image src={images.profile_sm} className="person" alt="Abid" />
        {/* <Image src={images.circle1} className="shape circle" alt="circle" /> */}
        {/* <Image src={images.dots} className="shape dots" alt="dots" /> */}
      </div>

      </div>
    </header>
  )
}

export default Header
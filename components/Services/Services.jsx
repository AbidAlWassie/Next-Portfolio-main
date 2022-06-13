import React from 'react'
import { images } from '../../constants'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Services = () => {
  return (
    <div className="services section" id="services">
      <div className="container flex justify-between mx-auto">
        <div className="services-info">
          <h1 className="sub-heading">My Services</h1>
          <h3 className="heading">Things I can do for my clients</h3>
          <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda numquam, iusto eius enim ullam eligendi maiores.</p>
          <div className="milestones">
            <div className="ml">
              <h2 className="number"><span data-target="4">0</span>+</h2>
              <h5><span>Years</span></h5>
            </div>
            <div className="ml">
              <h2 className="number"><span data-target="50">0</span>+</h2>
              <h5><span>Projects</span></h5>
            </div>
            <div className="ml">
              <h2 className="number"><span data-target="7">0</span>+</h2>
              <h5><span>Clients</span></h5>
            </div>
          </div>
          <div className="cta">
          <Tippy content="Send me an Email" theme='default' placement='right' arrow={true} animation="shift-toward-subtle" duration={0}>
              <a href="mailto:abidalwassie@gmail.com" className="btn email">Hire me</a>
            </Tippy>
            <a href={images.email} download className="btn secondary-btn">Download CV</a>
          </div>
        </div>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="card-desc">
              <h3>Service Title</h3>
              <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nemo? Voluptates soluta minima quam quisquam, exercitationem quos sequi.</p>
            </div>
            <a href="test" className="btn secondary-btn">Read more</a>
          </div>
          
          <div className="service-card">
            <div className="card-desc">
              <h3>Service Title</h3>
              <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nemo? Voluptates soluta minima quam quisquam, exercitationem quos sequi.</p>
            </div>
            <a href="test" className="btn secondary-btn">Read more</a>
          </div>

          <div className="service-card">
            <div className="card-desc">
              <h3>Service Title</h3>
              <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nemo? Voluptates soluta minima quam quisquam, exercitationem quos sequi.</p>
            </div>
            <a href="test" className="btn secondary-btn">Read more</a>
          </div>

          <div className="service-card">
            <div className="card-desc">
              <h3>Service Title</h3>
              <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nemo? Voluptates soluta minima quam quisquam, exercitationem quos sequi.</p>
            </div>
            <a href="test" className="btn secondary-btn">Read more</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Services
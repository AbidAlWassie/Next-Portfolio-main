import React from 'react'
import { images } from '../../constants'
import SvgDesign from '../../assets/vectors/Design'
import SvgPrototype from '../../assets/vectors/Prototype'
import SvgTesting from '../../assets/vectors/Testing'
import SvgResearch from '../../assets/vectors/Research'
const About = () => {
  return (
    <div className="about section" id="about">
      <div className="container flex justify-between items-center mx-auto">
      
      <div className="about-flex flex-[1]">

        <div className="about-card">
        <SvgDesign/>
          <h3>
            User Research
          </h3>
        </div>
        <div className="about-card">
          <SvgPrototype/>
          <h3>
            Visual Design
          </h3>
        </div>
        <div className="about-card">
          <SvgResearch/>
          <h3>
            User Testing
          </h3>
        </div>
        <div className="about-card">
        <SvgTesting/>
          <h3>
            Prototyping
          </h3>
        </div>

      </div>

      <div className="about-info flex-[1]">
        <h3 className="sub-heading">About me</h3>
        <h1 className="heading">Better Design,<br /> better performance</h1>
        <p className="text">I&apos;m a Web Developer 5+ years of experience. I bring expertise in building responsive UIs, managing state efficiently, and integrating cutting-edge technologies. Adept at collaborating in agile environments, I thrive on delivering elegant solutions that marry functionality with an exceptional user experience.</p>
      </div>

      </div>
      
    </div>
  )
}



export default About
import React from 'react'
import { images } from '../../constants'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import Image from 'next/image'

const Work = () => {
  return (
    <div className="work section" id="work">
        <div className="container mx-auto mb-20 w-full">

          <div className="portfolio-header">

          <div className="portfolio-title">
            <h3 className="sub-heading">Work</h3>
            <h1 className="heading">Latest Projects</h1>
          </div>
          
          <div className="filter-btns">
            <button className="filter-btn" data-filter="all">All</button>
            <button className="filter-btn" data-filter=".frontend">Front end</button>
            <button className="filter-btn" data-filter=".backend">Back end</button>
            <button className="filter-btn" data-filter=".others">Others</button>
          </div>

          </div>

          <div className="portfolio-items">

            <div className="prt-card mix backend">
            <div className="prt-image">
                <Image src={images.web_development1} alt="" />

                <div className="prt-overlay">
                  <a href="view" className="prt-icon view">
                    <AiFillEye/>
                  </a>

                  <a href="code" className="prt-icon code">
                    <AiFillGithub/>
                  </a>
                </div>
              </div>
              <div className="prt-desc">
                <h3>Web App</h3>
                <a href="null" className="btn secondary-btn sm">Read more</a>
              </div>
            </div>

            <div className="prt-card mix frontend">

              <div className="prt-image">
                <Image src={images.web_design1} alt="" />

                <div className="prt-overlay">
                  <a href="view" className="prt-icon view">
                    <AiFillEye/>
                  </a>

                  <a href="code" className="prt-icon code">
                    <AiFillGithub/>
                  </a>
                </div>
              </div>

              <div className="prt-desc">
                <h3>Web Design</h3>
                <a href="null" className="btn secondary-btn sm">Read more</a>
              </div>
            </div>

            <div className="prt-card mix backend">
              <div className="prt-image">
                <Image src={images.web_development1} alt="" />

                <div className="prt-overlay">
                  <a href="view" className="prt-icon view">
                    <AiFillEye/>
                  </a>

                  <a href="code" className="prt-icon code">
                    <AiFillGithub/>
                  </a>
                </div>
              </div>
              <div className="prt-desc">
                <h3>Web App</h3>
                <a href="null" className="btn secondary-btn sm">Read more</a>
              </div>
            </div>

            <div className="prt-card mix frontend">
            <div className="prt-image">
                <Image src={images.web_design1} alt="" />

                <div className="prt-overlay">
                  <a href="view" className="prt-icon view">
                    <AiFillEye/>
                  </a>

                  <a href="code" className="prt-icon code">
                    <AiFillGithub/>
                  </a>
                </div>
              </div>
              <div className="prt-desc">
                <h3>Web Design</h3>
                <a href="null" className="btn secondary-btn sm">Read more</a>
              </div>
            </div>

            <div className="prt-card mix frontend">
            <div className="prt-image">
                <Image src={images.web_design1} alt="" />

                <div className="prt-overlay">
                  <a href="view" className="prt-icon view">
                    <AiFillEye/>
                  </a>

                  <a href="code" className="prt-icon code">
                    <AiFillGithub/>
                  </a>
                </div>
              </div>
              <div className="prt-desc">
                <h3>Web Design</h3>
                <a href="null" className="btn secondary-btn sm">Read more</a>
              </div>
            </div>

            <div className="prt-card mix backend">
            <div className="prt-image">
                <Image src={images.web_development1} alt="" />

                <div className="prt-overlay">
                  <a href="view" className="prt-icon view">
                    <AiFillEye/>
                  </a>

                  <a href="code" className="prt-icon code">
                    <AiFillGithub/>
                  </a>
                </div>
              </div>
              <div className="prt-desc">
                <h3>Web App</h3>
                <a href="null" className="btn secondary-btn sm">Read more</a>
              </div>
            </div>

            <div className="prt-card mix others">
            <div className="prt-image">
                <Image src={images.web_development1} alt="" />

                <div className="prt-overlay">
                  <a href="view" className="prt-icon view">
                    <AiFillEye/>
                  </a>

                  <a href="code" className="prt-icon code">
                    <AiFillGithub/>
                  </a>
                </div>
              </div>
              <div className="prt-desc">
                <h3>Web App</h3>
                <a href="null" className="btn secondary-btn sm">Read more</a>
              </div>
            </div>

            <div className="prt-card mix others">
            <div className="prt-image">
                <Image src={images.web_development1} alt="" />

                <div className="prt-overlay">
                  <a href="view" className="prt-icon view">
                    <AiFillEye/>
                  </a>

                  <a href="code" className="prt-icon code">
                    <AiFillGithub/>
                  </a>
                </div>
              </div>
              <div className="prt-desc">
                <h3>Web App</h3>
                <a href="null" className="btn secondary-btn sm">Read more</a>
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Work
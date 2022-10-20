import React from 'react'
import 'tippy.js/dist/tippy.css';
// import Image from 'next/image';

export default function YouTube() {
  return (
    <div className="youtube section" id="youtube">
      
        <div className="container mx-auto mb-20 w-full">

          <div className="portfolio-header">

          <div className="portfolio-title">
            <h3 className="sub-heading">YouTube</h3>
            <h1 className="heading">Latest Videos</h1>
          </div>
          
          <div className="filter-btns">
            <button className="filter-btn" data-filter="all">All</button>
            <button className="filter-btn" data-filter=".frontend">Unity</button>
            <button className="filter-btn" data-filter=".backend">Godot</button>
            <button className="filter-btn" data-filter=".others">Others</button>
          </div>

          </div>

          <div className="youtube-videos">
          
          {/* <div className="prt-card mix unity">
            <div className="prt-image">

            <Image src="https://i.ytimg.com/vi/mZC3cWJffoE/hqdefault.jpg" width={480} height={360} alt="" />
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
            </div> */}

          

          </div>
        </div>
    </div>
  )
}

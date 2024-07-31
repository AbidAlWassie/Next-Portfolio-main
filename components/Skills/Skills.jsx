import React from 'react'
import { images } from '../../constants'
import Image from 'next/image'

const Skills = () => {
  return (
    <div className="skills section" id="skills">
      <div className="container flex justify-between items-center mx-auto">
        <div className="skills-box">
          <div className="box-heading">
            <h3 className="sub-heading">My Skills</h3>
            <h1 className="heading">Looking forward to work with you!</h1>
            <div className="box-desc">
              <div className="text">
              I am a full stack developer specializing in TypeScript and React. I use Next.js for SSR, SSG and CSG sites optimized for performance. I use Auth.js for secure authentication. I tend to focus on creating interactive and responsive user interfaces for all devices. I am committed to delivering high-quality code and staying updated on industry trends.
              </div>
            </div>
          </div>

            <div className="skills-wrap">
              <div className="skill">
                <div className="sk-progress">
                  <svg className="p-circle3">
                    <circle className="p-circle3" cx={75} cy={75} r={68}/>
                  </svg>
                  <div className="techLogo">
                    <Image loading="eager" src={images.javascript} alt="" />
                  </div>
                  <h2 className="counter">
                    <span data-target="90">0</span>%
                  </h2>
                <div className="sk-title">JavaScript</div>
                </div>
              </div>

              <div className="skill">
                <div className="sk-progress">
                  <svg className="p-circle16">
                    <circle className="p-circle16" cx={75} cy={75} r={68}/>
                  </svg>
                  <div className="techLogo">
                    <Image loading="eager" src={images.ts} alt="" />
                  </div>
                  <h2 className="counter">
                    <span data-target="45">0</span>%
                  </h2>
                <div className="sk-title">TypeScript</div>
                </div>
              </div>

              <div className="skill">
                <div className="sk-progress">
                  <svg className="p-circle4">
                    <circle className="p-circle4" cx={75} cy={75} r={68}/>
                  </svg>
                  <div className="techLogo">
                    <Image loading="eager" src={images.react} alt="" />
                  </div>
                  <h2 className="counter">
                    <span data-target="65">0</span>%
                  </h2>
                <div className="sk-title">React</div>
                </div>
              </div>

              <div className="skill">
                <div className="sk-progress">
                  <svg className="p-circle6">
                    <circle className="p-circle6" cx={75} cy={75} r={68}/>
                  </svg>
                  <div className="techLogo">
                    <Image loading="eager" src={images.nextjs} alt="" />
                  </div>
                  <h2 className="counter">
                    <span data-target="70">0</span>%
                  </h2>
                <div className="sk-title">Next.js</div>
                </div>
              </div>

              <div className="skill">
                <div className="sk-progress">
                  <svg className="p-circle11">
                    <circle className="p-circle11" cx={75} cy={75} r={68}/>
                  </svg>
                  <div className="techLogo">
                    <Image loading="eager" src={images.firebase} alt="" />
                  </div>
                  <h2 className="counter">
                    <span data-target="90">0</span>%
                  </h2>
                <div className="sk-title">Firebase</div>
                </div>
              </div>

              <div className="skill">
                <div className="sk-progress">
                  <svg className="p-circle7">
                    <circle className="p-circle7" cx={75} cy={75} r={68}/>
                  </svg>
                  <div className="techLogo">
                    <Image loading="eager" src={images.tailwind} alt="" />
                  </div>
                  <h2 className="counter">
                    <span data-target="90">0</span>%
                  </h2>
                <div className="sk-title">Tailwind</div>
                </div>
              </div>

              <div className="skill">
                <div className="sk-progress">
                  <svg className="p-circle10">
                    <circle className="p-circle10" cx={75} cy={75} r={68}/>
                  </svg>
                  <div className="techLogo">
                    <Image loading="eager" src={images.git} alt="" />
                  </div>
                  <h2 className="counter">
                    <span data-target="100">0</span>%
                  </h2>
                <div className="sk-title">Git</div>
                </div>
              </div>

              <div className="skill">
                <div className="sk-progress">
                  <svg className="p-circle9">
                    <circle className="p-circle9" cx={75} cy={75} r={68}/>
                  </svg>
                  <div className="techLogo">
                    <Image loading="eager" src={images.figma} alt="" />
                  </div>
                  <h2 className="counter">
                    <span data-target="96">0</span>%
                  </h2>
                <div className="sk-title">Figma</div>
                </div>
              </div>

              <div className="skill">
                <div className="sk-progress">
                  <svg className="p-circle1">
                    <circle className="p-circle1" cx={75} cy={75} r={68}/>
                  </svg>
                  <div className="techLogo">
                    <Image loading="eager" src={images.html} alt="" />
                  </div>
                  <h2 className="counter">
                    <span data-target="97">0</span>%
                  </h2>
                <div className="sk-title">HTML5</div>
                </div>
              </div>

              <div className="skill">
                <div className="sk-progress">
                  <svg className="p-circle2">
                    <circle className="p-circle2" cx={75} cy={75} r={68}/>
                  </svg>
                  <div className="techLogo">
                    <Image loading="eager" src={images.css} alt="" />
                  </div>
                  <h2 className="counter">
                    <span data-target="95">0</span>%
                  </h2>
                <div className="sk-title">CSS3</div>
                </div>
              </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
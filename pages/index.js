import Head from 'next/head'
import Image from 'next/image'
import {useEffect} from 'react';
import { About, Footer, Header, Services, Skills, Testimonials, Work, Contact, Navbar } from '../components';
// import { Navbar } from './components/';
// import scrollreveal from 'scrollreveal'
// import mixitup from 'mixitup'


export default function Home() {

//   useEffect(() => {
//     const sr = scrollreveal({
//       distance: '60px',
//       duration: 2500,
//     });
    
//     sr.reveal(".showcase-info", {delay: 200});
//     sr.reveal(".showcase-img", {origin: "top", delay: 400});
//     sr.reveal(".square", {origin: "left", delay: 600});
//     sr.reveal(".about-flex", {origin: "bottom", delay: 0, duration: 1200});
//     sr.reveal(".about-info", {origin: "bottom", delay: 200, duration: 1200});
//     sr.reveal(".skills-box", {origin: "bottom", delay: 0, duration: 1200});
//     sr.reveal(".services-info", {origin: "bottom", delay: 0, duration: 1200});
//     sr.reveal(".services-grid", {origin: "bottom", delay: 200, duration: 1200});
//     sr.reveal(".work .container", {origin: "bottom", delay: 0, duration: 1200});
//     sr.reveal(".contact-info", {origin: "bottom", delay: 0, duration: 1200});
//     sr.reveal(".contact-form", {origin: "bottom", delay: 200, duration: 1200});
// }, []);

  // useEffect(() => {
  //   mixitup(".portfolio-items", {
  //     selectors: {
  //       target: ".prt-card",
  //     },
  //     animation: {
  //       duration: 500
  //     }
  //   });
  // }, []);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Services />
      <Work />
      <Contact />
      <Testimonials />
      <Footer />
    </div>
  )
}

// Sticky Nav
function stickyNav() {
  var navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.pageYOffset > 0);
}
// window.addEventListener("scroll", stickyNav);

let skillsPlayed = false;
let mlPlayed = false;
if (typeof window !== "undefined") {
window.addEventListener("scroll", () => {
  
  activeLink();

  stickyNav();

  if (!skillsPlayed) loadSkills();

  if (!mlPlayed) mlCounter();

});
}

function updateCount(num, maxNum) {
  let currentNum = +num.innerText;

  if (currentNum < maxNum) {
    num.innerText = currentNum + 1;
    setTimeout(() => {
      updateCount(num, maxNum);
    }, 12);
  }
}


function loadSkills() {
  const skCounters = document.querySelectorAll(".counter span");
  const progressBars = document.querySelectorAll(".sk-progress svg circle");
  // const scrollable =  document.documentElement.scrollHeight - window.innerHeight;
  
    const scrolled = window.scrollY;

    if (scrolled >= 1200) {
      
      for (let i = 0; i < skCounters.length; i++) {

        skillsPlayed = true;

        const cvalue = Number(skCounters[i].dataset.target);
        let strokeValue = 427 - 427 * (cvalue/100);

        progressBars[i].style.animation = "progress 2s ease-in-out forwards";
        progressBars[i].style.setProperty("--target", strokeValue);

        setTimeout(() => {
          updateCount(skCounters[i], cvalue);
        }, 400);
      }

      setTimeout(() => {
        window.removeEventListener("scroll", loadSkills);
      }, 2000);
    }
}
// End


// Services Milestones Counter Animation

// console.log(mlCounters);


function mlCounter() {
  // let mlSection = document.querySelectorAll(".milestones");
  let mlCounters = document.querySelectorAll(".number span");
  
  
  const scrolled = window.scrollY;
  
  if (scrolled >= 1750) {
    // console.log(mlCounters.length);
    
    for (let i = 0; i < mlCounters.length; i++) {
      mlPlayed = true;

      let mvalue = Number(mlCounters[i].dataset.target);
      setTimeout(() => {
        updateCount(mlCounters[i], mvalue);
      }, 1000);
    }
    
  }
}

// Active Nav Links

    

function activeLink() {
  var navbar = document.getElementById("navbar");
  // console.log();
  let sections = document.querySelectorAll(".section");
  let passedSections = Array.from(sections).map((sect, i) => {
    return { 
      y: sect.getBoundingClientRect().top - navbar.offsetHeight,
      id: i
    };
  }).filter(sect => sect.y <= 0);

    // console.log(passedSections);

  let currentSectID = passedSections.at(-1).id;
  // console.log(currentSectID);
  
  let navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(l => l.classList.remove("active"));
  navLinks[currentSectID].classList.add("active");

  // for (let i = 0; i < navLinks.length; i++) {
      
  //     console.log();
  //   }

  }
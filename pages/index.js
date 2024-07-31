import Head from 'next/head'
import Script from 'next/script'
import { AiFillCopy } from 'react-icons/ai'
import { FaPlay } from 'react-icons/fa'
import Image from 'next/image'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { About, Footer, Header, Services, Skills, Testimonials, Work, Contact, Navbar } from '../components';

const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems";

export const getStaticProps = async () => {
  const res =  await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLIWGHKiGCTxSEXgpAfdBXXJWC0YGA4R0v&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`);
  const data = await res.json();

  return {
    props: { data }, revalidate: 60
  }
}

export default function Home({data}) {
  return (
    <div className="App">
      <Head>
        <link rel="shortcut icon" href="shortcut-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Abid Al Wassie | Portfolio Website"
        />
        <title>Abid Al Wassie | Portfolio</title>
      </Head>
      <Navbar />
      <Header />
      <About />
      <Skills />

      <div className="youtube section" id="youtube">
          
          <div className="container mx-auto mb-20 w-full">

            <div className="portfolio-header">

            <div className="portfolio-title">
              <h3 className="sub-heading">YouTube</h3>
              <h1 className="heading">Latest Videos</h1>
            </div>
            
            <div className="filter-btns">
              <button className="filter-btn" data-filter="all">All</button>
              <button className="filter-btn" data-filter=".PLIWGHKiGCTxSEXgpAfdBXXJWC0YGA4R0v">Unity</button>
              <button className="filter-btn" data-filter=".backend">Godot</button>
              <button className="filter-btn" data-filter=".others">Others</button>
            </div>

            </div>

            <div className="youtube-videos">

            {data.items.map((item) => {
              console.log(item.snippet.playlistId);
              const { id, snippet = {}, } = item;
              const { title, thumbnails = {}, resourceId, playlistId } = snippet;
              const { high = {} } = thumbnails;
              return (
                <div key={id}>
                  <div className={`yt-card mix ${playlistId}`}>
                  <div className="yt-image">

                  <Image src={high.url} width={480} height={360} alt={title} />
                  <div className="yt-overlay">
                  <Tippy content={<div className="special"><span className="">Watch it on </span> <span className="tooltip">YouTube</span></div>} theme='default' placement='bottom' duration={0} arrow={true} animation="shift-toward-subtle" allowHTML={true}>
                  <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`} target="_blank" rel="noreferrer" className="yt-icon yt">
                    <FaPlay/>
                  </a>
                  </Tippy>
                  
                  <Tippy content={<div className="special"><span className="">Copy link to </span> <span className="tooltip">Share</span></div>} theme='default' placement='bottom' duration={0} arrow={true} animation="shift-toward-subtle" allowHTML={true}>
                  <a href="#!" className="yt-icon copy">
                    <AiFillCopy/>
                  </a>
                  </Tippy>

                  </div>

                  </div>
                    <Tippy content={<div className="special"><span className="">Watch it on </span> <span className="tooltip">YouTube</span></div>} theme='default' placement='bottom' duration={0} arrow={true} animation="shift-toward-subtle" allowHTML={true}>
                    <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`} target="_blank" rel="noreferrer" className='font-semibold text-center link'>
                    {title}
                    </a>
                    </Tippy>
                  </div>
                </div>
              )
            })}
            

            </div>
          </div>
          
      </div>
      <Services />
      <Work />
      <Contact />
      <Testimonials />
      <Footer />
      <Script src="/config.js" />
      <Script src="/toggleTheme.js" />
      <Script src="/apis.js" />
    </div>
  )
}

// Sticky Nav
function stickyNav() {
  var navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.pageYOffset > 0);
}

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

function isInViewport(element, offset = 0) {
  const rect = element.getBoundingClientRect();
  return rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset;
}

function loadSkills() {
  const skCounters = document.querySelectorAll(".counter span");
  const progressBars = document.querySelectorAll(".sk-progress svg circle");

  if (skCounters.length > 0 && isInViewport(skCounters[0], 0)) {
    for (let i = 0; i < skCounters.length; i++) {
      skillsPlayed = true;

      const cvalue = Number(skCounters[i].dataset.target);
      let strokeValue = 427 - 427 * (cvalue / 100);

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

function mlCounter() {
  const mlCounters = document.querySelectorAll(".number span");

  if (mlCounters.length > 0 && isInViewport(mlCounters[0], -250)) {
    for (let i = 0; i < mlCounters.length; i++) {
      mlPlayed = true;

      let mvalue = Number(mlCounters[i].dataset.target);
      setTimeout(() => {
        updateCount(mlCounters[i], mvalue);
      }, 1000);
    }

    setTimeout(() => {
      window.removeEventListener("scroll", mlCounter);
    }, 2000);
  }
}

// Active Nav Links
function activeLink() {
  var navbar = document.getElementById("navbar");
  let sections = document.querySelectorAll(".section");
  let passedSections = Array.from(sections).map((sect, i) => {
    return { 
      y: sect.getBoundingClientRect().top - navbar.offsetHeight,
      id: i
    };
  }).filter(sect => sect.y <= 0);

  let currentSectID = passedSections.at(-1).id;
  let navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(l => l.classList.remove("active"));
  navLinks[currentSectID].classList.add("active");
}

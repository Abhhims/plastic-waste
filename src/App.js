import React, { useEffect } from 'react';
import './App.css'; 
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import AboutSection from './AboutSection';
import Page2 from './Page2';
import { Page1 } from './Page1';
function App() {
  const showSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('active');
  };

  const hideSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('active');
  };

  useEffect(() => {
    // Load external scripts
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject();
        document.body.appendChild(script);
      });
    };

    const loadScripts = async () => {
      try {
        await loadScript('https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js');
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.1/gsap.min.js');
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.1/ScrollTrigger.min.js');
        locomotiveAnimation(); // Call the animation function after scripts are loaded
      } catch (error) {
        console.error('Error loading scripts:', error);
      }
    };

    loadScripts();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Cleanup function to remove event listeners
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function(e) {
          e.preventDefault();
        });
      });
    };
  }, []);

  const locomotiveAnimation = () => {
 
    // Accordion animation
    const accordionItems = document.querySelectorAll(".accordion-item");
    const accordionImages = document.querySelectorAll(".right-column img");

    accordionItems.forEach((item, index) => {
      item.addEventListener("mouseenter", function () {
        gsap.to(accordionImages[index], { scale: 1.1, duration: 0.8, ease: "power1.inOut" });
      });

      item.addEventListener("mouseleave", function () {
        gsap.to(accordionImages[index], { scale: 1, duration: 0.8, ease: "power1.inOut" });
      });
    });

  };

  return (
    <div>
     <body>
       
        <div id="main">
          <Page1></Page1>
          
          <Page2 />
          
          <AboutMeSection />
          
          <div id="page5">
            <a href="contact.html" className="animated-button">Contact Us</a>

            <div id="page5-right">
              <p>
                At Due Drop, we are dedicated to transforming plastic waste into a valuable resource through innovative solutions. Our approach bridges the gap between environmental sustainability and community empowerment, creating a circular economy that benefits both people and the planet.
              </p>
              <div id="page5-content">
                <div className="uiux">
                  <details open>
                    <summary>
                      <div id="flex">
                        <h4>Circular Economy</h4>
                        <h4>Sustainability</h4>
                        <h4>Plastic Waste Management</h4>
                        <h4>Community Empowerment</h4>
                      </div>
                    </summary>
                    <div id="page-container">
                      <div className="page5-elem">
                        <div className="over"></div>
                        <h3>Upstream Measures</h3>
                        <p>Upstream strategies focus on reducing plastic production at its source. By redesigning materials and packaging, we aim to cut down on waste before it enters the ecosystem.</p>
                      </div>
                      <div className="page5-elem">
                        <div className="over"></div>
                        <h3>Downstream Measures</h3>
                        <p>Downstream measures target effective recycling and waste management solutions. Our goal is to ensure that plastic waste is captured, recycled, and repurposed, reducing environmental harm.</p>
                      </div>
                      <div className="page5-elem">
                        <div className="over"></div>
                        <h3>The Plastic Project Impact</h3>
                        <p>This project is more than waste management—it’s about creating a sustainable system that benefits both the environment and local communities. The ripple effect of this initiative extends far beyond plastic reduction.</p>
                      </div>
                      <div className="page5-elem">
                        <div className="over"></div>
                        <h3>Benefit of Quality Assurance</h3>
                        <p>High-quality recycling processes not only reduce plastic waste but also produce superior raw materials for future use, ensuring a closed-loop system that minimizes environmental impact.</p>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>

      </body>
    </div>
  );
}



function AboutMeSection() {
  return (
    <div id="page11">
      {/* About Me Section */}
      <section className="about-me-section">
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="left-column">
              <h1>Protecting Our Planet Starts with Us</h1>
              <p>
                Our planet is at a tipping point. Now, more than ever, we must take measurable steps to reduce our environmental impact, manage our resources responsibly, and engage communities in waste management efforts to ensure a sustainable future.
              </p>
              
              {/* Accordion */}
              <div className="accordion">
                <div className="accordion-item">
                  <div className="accordion-header">Measure</div>
                  <div className="accordion-content">
                    <p>Quantify the plastic used across the value chain and assess how much ends up in nature. This is the foundation of plastic stewardship.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">Reduce</div>
                  <div className="accordion-content">
                    <p>Reduce or eliminate unnecessary plastic. Redesign for reuse and recycling. Increase recycled content.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">Manage</div>
                  <div className="accordion-content">
                    <p>Finance plastic waste collection and recycling infrastructure to increase the likelihood that plastic remaining in the value chain will be managed properly.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">Engage</div>
                  <div className="accordion-content">
                    <p>Communicate about waste management efforts and share best practices.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="right-column">
              <img data-sec="a" src="nandhu-kumar-5NGTf4oD8RA-unsplash.jpg" alt="About Me Image" />
              <img data-sec="b" src="nandhu-kumar-5NGTf4oD8RA-unsplash.jpg" alt="About Me Image" />
              <img data-sec="c" src="eryxson-fonseca-iTzjV1IXw-unsplash.jpg" alt="" />
              <img data-sec="d" src="eryxson-fonseca-iTzjV1IXw-unsplash.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



export default App;
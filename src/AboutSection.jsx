import React, { useEffect } from 'react';
import './About.css'; // Assuming styles are in App.css

const AboutSection = () => {
  useEffect(() => {
    // Smooth scroll to section on click
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Optional parallax scrolling effect
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      document.querySelector('.about-section').style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="about-section">
      <div className="container">
        <h1 className="section-title">About Us</h1>
        <div className="about-content">
          <div className="who-we-are">
            <h2>Who We Are</h2>
            <p>
              At Due Drop, we are committed to driving sustainable change by creating circular economies through the innovative management of plastic waste. Our focus lies in reducing environmental pollution by reintegrating plastic waste into the economy in meaningful ways. We help organizations meet their ESG goals and contribute to a greener planet through plastic credits.
            </p>
          </div>

          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              Our mission is to lead the charge in revolutionizing the way plastic waste is managed. By turning plastic into a valuable resource, we help businesses, governments, and individuals contribute to a cleaner, healthier planet.
            </p>
          </div>

          <div className="what-we-do">
            <h2>What We Do</h2>
            <p>
              At Due Drop, we provide cutting-edge solutions to collect, process, and recycle plastic waste, allowing it to be reused in the economy. Through our partnerships, we support communities, improve livelihoods, and foster a culture of sustainability. We also assist businesses in achieving their plastic stewardship objectives by offering them opportunities to invest in plastic credits.
            </p>
          </div>

          <div className="values">
            <h2>Our Values</h2>
            <ul>
              <li><strong>Sustainability:</strong> Everything we do is centered on creating long-lasting environmental solutions.</li>
              <li><strong>Innovation:</strong> We use the latest technology to promote circular economies and transform waste into value.</li>
              <li><strong>Community Impact:</strong> We believe in fostering inclusivity by empowering local communities and improving the livelihoods of waste sector workers.</li>
              <li><strong>Transparency:</strong> We ensure that every step of our process is clear and traceable, helping organizations achieve their sustainability goals with confidence.</li>
            </ul>
          </div>

          <div className="approach">
            <h2>Our Approach</h2>
            <p>
              We scale plastic waste collection systems and work with informal and formal waste sector workers to create dignified jobs. By focusing on transparency and accountability, we ensure that all our stakeholders—from businesses to governments—can confidently meet their sustainability targets.
            </p>
          </div>

          <div className="why-us">
            <h2>Why Us</h2>
            <p>
              Due Drop isn't just about waste management—it's about creating a circular economy where plastic waste is viewed as a resource rather than pollution. Our platform enables organizations to offset their plastic waste by purchasing plastic credits, while directly contributing to reduced pollution and improved environmental health.
            </p>
          </div>
        </div>
      </div>
      <a href="contact.html" className="animated-button">Contact Us</a>
    </section>
  );
};

export default AboutSection;

import React, { useEffect, useRef } from 'react';
import './BenefitsSection.css'; // Import your styles

function BenefitsSection() {
  const tilesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 } // Trigger animation when 10% of the element is in view
    );

    tilesRef.current.forEach((tile) => observer.observe(tile));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="benefits-section">
      <h1 className="title">Benefits of Investing in Plastic Credits</h1>
      <p className="intro-text">
        Incorporating plastic credits into plastic reduction and sustainability strategies can significantly contribute to achieving ESG and plastic stewardship objectives. Other benefits include:
      </p>

      <div className="tiles-container">
        <div
          className="tile"
          ref={(el) => tilesRef.current.push(el)}
        >
          <img
            src="https://images.unsplash.com/photo-1526951521990-620dc14c214b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Economy image"
            className="tile-img"
          />
          <h2>Economic Advantage</h2>
          <p>
            Ensure proper plastic management, generate a <strong>recycled plastic supply</strong>, and accelerate the shift to a <strong>circular economy</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;

import React from 'react';
import { personal } from '../data/portfolio';
import './Hero.css';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-glow" />
      <div className="hero-content">
        <div className="hero-tag">
          <span className="pulse-dot" />
          Open to Internships
        </div>
        <h1>
          {personal.name}<br />
          <span>Full-Stack</span><br />
          Developer
        </h1>
        <p className="hero-sub">
          B.Tech IT student at PSG College of Technology. I build and ship real
          client-facing software — from dealership CRMs to billing platforms to
          AI-powered voice systems.
        </p>
        <div className="hero-ctas">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-outline">Get In Touch</a>
        </div>
      </div>
    </div>
  );
}

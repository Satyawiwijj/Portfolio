import React from 'react';
import Section from './Section.jsx';
import { personal, stats } from '../data/portfolio';
import './About.css';

export default function About() {
  return (
    <Section id="about" label="Who I Am" title="About Me">
      <div className="about-grid reveal">
        <div className="about-text">
          <p>{personal.bio1}</p>
          <p>{personal.bio2}</p>
          <p>{personal.bio3}</p>
        </div>
        <div className="about-stats">
          {stats.map(s => (
            <div className="stat-card" key={s.label}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

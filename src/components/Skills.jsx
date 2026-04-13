import React from 'react';
import Section from './Section.jsx';
import { skills } from '../data/portfolio';
import './Skills.css';

export default function Skills() {
  return (
    <Section id="skills" label="What I Work With" title="Skills">
      <div className="skills-grid">
        {skills.map(g => (
          <div className="skill-group reveal" key={g.label}>
            <div className="skill-group-label">{g.label}</div>
            <div className="skill-pills">
              {g.items.map(item => <span className="pill" key={item}>{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

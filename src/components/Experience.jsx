import React from 'react';
import Section from './Section.jsx';
import { experiences } from '../data/portfolio';
import './Experience.css';

export default function Experience() {
  return (
    <Section id="experience" label="Where I've Worked" title="Experience">
      <div className="exp-list">
        {experiences.map(e => (
          <div className="exp-card reveal" key={e.org}>
            <div className="exp-dot" />
            <div className="exp-body">
              <div className="exp-header">
                <div className="exp-title">{e.title}</div>
                <div className="exp-period">{e.period}</div>
              </div>
              <div className="exp-org">{e.org}</div>
              <ul className="exp-bullets">
                {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

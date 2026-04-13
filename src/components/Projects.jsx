import React from 'react';
import Section from './Section.jsx';
import { projects } from '../data/portfolio';
import './Projects.css';

export default function Projects() {
  return (
    <Section id="projects" label="What I've Built" title="Projects">
      <div className="projects-grid">
        {projects.map(p => (
          <div className="project-card reveal" key={p.name}>
            <div className="project-icon">{p.icon}</div>
            <div className="project-name">{p.name}</div>
            <div className="project-type">{p.type}</div>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tags">
              {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

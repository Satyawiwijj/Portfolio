import React from 'react';
import './Section.css';

export default function Section({ id, label, title, children }) {
  return (
    <section id={id} className="section">
      <div className="reveal">
        <div className="section-label">{label}</div>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

import React, { useRef, useState } from 'react';
import { withPrefix } from 'gatsby';
import me from '../../images/me.jpg';

const photo = withPrefix('/me-salt-lake.jpg');

const HEX_OFFSETS = [
  [0, 0],
  [65, 0],
  [-65, 0],
  [32.5, 56],
  [-32.5, 56],
  [32.5, -56],
  [-32.5, -56],
];
const EASE = 'cubic-bezier(.35,0,.15,1)';
const DELAYS = [0, 0.28, 0.52, 0.72, 0.88, 1, 1.08];
const DURATIONS = [1.4, 1.3, 1.2, 1.1, 1, 0.9, 0.8];

const poly = (cx, cy, s) => {
  const pts = [];
  for (let i = 0; i < 6; i += 1) {
    const a = -Math.PI / 2 + (i * Math.PI) / 3;
    pts.push(
      `${(cx + s * Math.cos(a)).toFixed(2)}% ${(cy + s * Math.sin(a)).toFixed(2)}%`,
    );
  }
  return `polygon(${pts.join(',')})`;
};

const AboutImg = ({ alt }) => {
  const [showPhoto, setShowPhoto] = useState(false);
  const boxRef = useRef(null);
  const framesRef = useRef([]);

  const play = (dir) => {
    const box = boxRef.current;
    if (!box) return;
    const layers = box.querySelectorAll('.hx');
    layers.forEach((layer, i) => {
      if (layer.getAnimations) {
        layer.getAnimations().forEach((a) => a.cancel());
      }
      const frame = framesRef.current[i];
      if (!frame || typeof layer.animate !== 'function') return;
      const from = dir === 'in' ? frame.p0 : frame.p1;
      const to = dir === 'in' ? frame.p1 : frame.p0;
      layer.animate([{ clipPath: from }, { clipPath: to }], {
        duration: Math.round(DURATIONS[i] * 1000),
        delay: Math.round(DELAYS[i] * 1000),
        easing: EASE,
        fill: 'both',
      });
    });
  };

  const toggle = (e) => {
    const box = boxRef.current;
    if (!box) return;
    if (!showPhoto) {
      const rect = box.getBoundingClientRect();
      let x = 50;
      let y = 50;
      if (e && typeof e.clientX === 'number' && e.type === 'click') {
        x = ((e.clientX - rect.left) / rect.width) * 100;
        y = ((e.clientY - rect.top) / rect.height) * 100;
      }
      framesRef.current = HEX_OFFSETS.map((offset) => ({
        p0: poly(x + offset[0], y + offset[1], 0),
        p1: poly(x + offset[0], y + offset[1], 85),
      }));
      play('in');
    } else {
      play('out');
    }
    setShowPhoto(!showPhoto);
  };

  const handleMouseMove = (e) => {
    const box = boxRef.current;
    if (!box) return;
    const rect = box.getBoundingClientRect();
    const dot = box.querySelector('.about-img__dot');
    if (dot) {
      dot.style.left = `${e.clientX - rect.left}px`;
      dot.style.top = `${e.clientY - rect.top}px`;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle(null);
    }
  };

  return (
    <div
      className="about-img"
      ref={boxRef}
      role="button"
      tabIndex={0}
      aria-pressed={showPhoto}
      aria-label="Toggle profile photo"
      onClick={toggle}
      onMouseMove={handleMouseMove}
      onKeyDown={handleKeyDown}>
      <img
        className="about-img__base"
        src={me}
        alt={alt || 'Profile'}
        width={350}
        height={350}
      />
      {HEX_OFFSETS.map((offset) => (
        <div className="hx" key={`${offset[0]}-${offset[1]}`}>
          <img src={photo} alt="" aria-hidden="true" />
        </div>
      ))}
      <span className="about-img__dot" aria-hidden="true" />
    </div>
  );
};

export default AboutImg;

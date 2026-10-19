import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import { PortfolioContext } from '../../context/context';
import Title from '../Title/Title';

const Experience = () => {
  const { experienceData, isDesktop } = useContext(PortfolioContext);

  return (
    <section id="experience">
      <Container>
        <Title title="Experience" />
        <div className="timeline">
          {experienceData.map((item, idx) => (
            <Fade
              key={item.id}
              left={isDesktop && idx % 2 === 0}
              right={isDesktop && idx % 2 !== 0}
              bottom={!isDesktop}
              duration={800}
              delay={200}
              distance="30px">
              <div className="timeline__item">
                <div className="timeline__dot" />
                <div className="timeline__content">
                  <div className="timeline__header">
                    <h3 className="timeline__school">{item.company}</h3>
                    <span className="timeline__period">{item.period}</span>
                  </div>
                  <p className="timeline__dept">{item.role}</p>
                  <ul className="timeline__details">
                    {item.details.map((d, i) => (
                      <li key={i}>
                        {typeof d === 'string' ? (
                          d
                        ) : (
                          <a
                            href={d.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="timeline__detail-link">
                            {d.text}
                            <svg
                              className="icon-external"
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                              <polyline points="15 3 21 3 21 9" />
                              <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;

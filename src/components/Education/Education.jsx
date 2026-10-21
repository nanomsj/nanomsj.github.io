import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import { PortfolioContext } from '../../context/context';
import Title from '../Title/Title';

const Education = () => {
  const { educationData, isDesktop } = useContext(PortfolioContext);

  return (
    <section id="education">
      <Container>
        <Title title="Education" />
        <div className="timeline">
          {educationData.map((item, idx) => (
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
                    <h3 className="timeline__school">
                      {item.schoolUrl ? (
                        <a
                          href={item.schoolUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="timeline__school-link">
                          {item.school}
                        </a>
                      ) : (
                        item.school
                      )}
                    </h3>
                    <span className="timeline__period">{item.period}</span>
                  </div>
                  {item.degrees && item.degrees.length > 0 ? (
                    item.degrees.map((d) => (
                      <p className="timeline__degree" key={`${d.prefix}-${d.field}`}>
                        {d.prefix} in {d.field} {' · '}
                        <a
                          href={d.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="timeline__dept-link">
                          {d.school}
                        </a>
                      </p>
                    ))
                  ) : (
                    <p className="timeline__dept">
                      {item.deptUrl ? (
                        <a
                          href={item.deptUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="timeline__dept-link">
                          {item.department}
                        </a>
                      ) : (
                        item.department
                      )}
                    </p>
                  )}
                  {(item.coursework || item.solutions) && (
                    <div className="timeline__actions">
                      {item.coursework && (
                        <a
                          href={item.coursework}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="timeline__link">
                          Course Materials
                        </a>
                      )}
                      {item.solutions && (
                        <a href={item.solutions} className="timeline__link">
                          Textbook Solutions
                        </a>
                      )}
                    </div>
                  )}
                  {item.details && item.details.length > 0 && (
                    <ul className="timeline__details">
                      {item.details.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Education;

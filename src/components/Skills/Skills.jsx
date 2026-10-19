import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { PortfolioContext } from '../../context/context';
import Title from '../Title/Title';

const skillCategories = [
  { key: 'programming', label: 'Programming', icon: 'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z' },
  { key: 'quantitative', label: 'Quantitative', icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z' },
  { key: 'languages', label: 'Languages', icon: 'M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0014.07 6H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z' },
];

const Skills = () => {
  const { skillsData, isDesktop } = useContext(PortfolioContext);

  return (
    <section id="skills">
      <Container>
        <Title title="Technical Skills" />
        <Row>
          {skillCategories.map(({ key, label, icon }, idx) => (
            <Col lg="4" md="6" sm="12" key={key}>
              <Fade
                bottom
                duration={800}
                delay={200 + idx * 100}
                distance="30px">
                <div className="skill-card">
                  <div className="skill-card__icon">
                    <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
                      <path d={icon} />
                    </svg>
                  </div>
                  <h3 className="skill-card__title">{label}</h3>
                  <p className="skill-card__text">{skillsData[key]}</p>
                </div>
              </Fade>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;

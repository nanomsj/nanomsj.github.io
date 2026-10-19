import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PortfolioContext } from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const { projectsData } = useContext(PortfolioContext);

  return (
    <section id="projects">
      <Container>
        <Title title="Projects" />
        <Row className="projects-grid">
          {projectsData.map((project) => {
            const { title, info, info2, img, pdf, id } = project;
            return (
              <Col lg="6" md="6" sm="12" key={id} className="projects-grid__col">
                <div className="project-card">
                  <div className="project-card__image">
                    <ProjectImg alt={title} filename={img} />
                  </div>
                  <div className="project-card__content">
                    <h3 className="project-card__title">{title}</h3>
                    <div className="project-card__desc">
                      <p>{info}</p>
                      {info2 && <p>{info2}</p>}
                      {pdf && (
                        <a
                          href={pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-card__link">
                          View Paper
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;

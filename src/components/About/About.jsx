import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { PortfolioContext } from '../../context/context';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';

const About = () => {
  const { aboutData, isDesktop } = useContext(PortfolioContext);
  const { paragraphOne, paragraphTwo, paragraphThree, resume } = aboutData;

  const handleScrollDown = (e) => {
    e.preventDefault();
    const el = document.getElementById('education');
    if (el) {
      window.scrollTo({ top: el.offsetTop - 50, behavior: 'smooth' });
    }
  };

  return (
    <section id="about">
      <Container>
        <Title title="Shijia Min" />
        <Row className="about-wrapper">
          <Col md="6" sm="12">
            <Fade bottom duration={isDesktop ? 1000 : 500} delay={isDesktop ? 200 : 100} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile" />
              </div>
            </Fade>
          </Col>
          <Col md="6" sm="12">
            <Fade bottom duration={isDesktop ? 1000 : 500} delay={isDesktop ? 200 : 100} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">{paragraphOne}</p>
                <p className="about-wrapper__info-text">{paragraphTwo}</p>
                <p className="about-wrapper__info-text">{paragraphThree}</p>
                {resume && (
                  <span className="d-flex mt-3 about-actions">
                    <a className="cta-btn" href="#education" onClick={handleScrollDown}>
                      Learn more
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}>
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

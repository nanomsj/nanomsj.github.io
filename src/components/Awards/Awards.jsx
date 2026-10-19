import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import { PortfolioContext } from '../../context/context';
import Title from '../Title/Title';

const Awards = () => {
  const { awardsData, isDesktop } = useContext(PortfolioContext);

  return (
    <section id="awards">
      <Container>
        <Title title="Honors & Awards" />
        <div className="awards-list">
          {awardsData.map((item, idx) => (
            <Fade
              key={item.id}
              left={isDesktop && idx % 2 === 0}
              right={isDesktop && idx % 2 !== 0}
              bottom={!isDesktop}
              duration={800}
              delay={200}
              distance="30px">
              <div className="awards-list__item">
                <div className="awards-list__icon">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div className="awards-list__text">
                  <h3 className="awards-list__title">{item.title}</h3>
                  <p className="awards-list__detail">{item.detail}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Awards;

import React, { createContext, useState, useEffect } from 'react';
import {
  headData,
  aboutData,
  educationData,
  experienceData,
  projectsData,
  awardsData,
  skillsData,
  contactData,
  footerData,
  githubButtons,
} from '../mock/data';

export const PortfolioContext = createContext();

const PortfolioProvider = ({ children }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }

    const handleResize = () => {
      if (window.innerWidth > 769) {
        setIsDesktop(true);
        setIsMobile(false);
      } else {
        setIsMobile(true);
        setIsDesktop(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <PortfolioContext.Provider
      value={{
        headData,
        aboutData,
        educationData,
        experienceData,
        projectsData,
        awardsData,
        skillsData,
        contactData,
        footerData,
        githubButtons,
        isDesktop,
        isMobile,
      }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioProvider;

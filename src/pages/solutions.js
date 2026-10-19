import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import { textbookSolutions, REPO_RAW_BASE } from '../mock/textbookSolutions';

const ExternalIcon = () => (
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
);

const SolutionsPage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>AI-Generated Textbook Solutions · Shijia Min</title>
      <html lang="en" />
      <meta
        name="description"
        content="AI-generated textbook solutions, not fully proofread. Please verify before relying on them."
      />
    </Helmet>
    <section id="solutions" className="solutions">
      <Container className="solutions__container">
        <a className="solutions__back" href="/#about">
          &larr; Back to homepage
        </a>
        <div className="solutions__title">
          <h1 className="solutions__heading">AI-Generated Textbook Solutions</h1>
        </div>
        <p className="solutions__disclaimer">
          <strong>AI-generated.</strong> These textbook solutions were prepared with AI assistance
          and have not been fully proofread. Please verify before relying on them.
        </p>
        {textbookSolutions.length > 0 ? (
          <ul className="solutions__list">
            {textbookSolutions.map(({ title, file }) => (
              <li key={file}>
                <a
                  href={`${REPO_RAW_BASE}${file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="solutions__item">
                  <span>{title}</span>
                  <ExternalIcon />
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="solutions__empty">Materials will be added soon.</p>
        )}
      </Container>
    </section>
  </>
);

export default SolutionsPage;

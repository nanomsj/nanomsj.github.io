import React from 'react';
import GitHubButton from 'react-github-btn';
import { PortfolioContext } from '../../context/context';

const GithubButtons = () => {
  const { githubButtons } = React.useContext(PortfolioContext);
  const { isEnabled } = githubButtons;

  return (
    <>
      {isEnabled && (
        <div className="github-btn">
          <GitHubButton
            href="https://github.com/nanomsj/nanomsj.github.io"
            data-size="large"
            data-show-count="true"
            aria-label="Star nanomsj on GitHub">
            Star
          </GitHubButton>
        </div>
      )}
    </>
  );
};

export default GithubButtons;

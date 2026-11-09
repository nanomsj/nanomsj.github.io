import React from 'react';
import { Link, navigate } from 'gatsby';

const BlogLink = ({ to, returnTo, isBack = false, children, ...props }) => (
  <Link
    {...props}
    to={returnTo?.url || to}
    onClick={(event) => {
      if (
        (isBack && !returnTo) ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      event.preventDefault();
      const { pathname, search, hash } = window.location;
      const state = returnTo
        ? { blogScrollY: returnTo.scrollY, blogReturn: returnTo.previous }
        : {
            blogReturn: {
              url: pathname + search + hash,
              scrollY: window.scrollY,
              previous: window.history.state?.blogReturn,
            },
          };
      navigate(returnTo?.url || to, { state, replace: Boolean(returnTo) });
    }}
  >
    {children}
  </Link>
);

export default BlogLink;

import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import posts from '../../mock/blogPosts';

const PostList = ({ limit }) => (
  <ul className="timeline blog-list">
    {posts.slice(0, limit).map(({ slug, date, title }) => (
      <li className="timeline__item" key={slug}>
        <span className="timeline__dot" aria-hidden="true" />
        <Link className="timeline__content blog-list__entry" to={`/blog/${slug}/`}>
          <span className="timeline__school">{title}</span>
          <time className="timeline__period" dateTime={date}>
            {date}
          </time>
        </Link>
      </li>
    ))}
  </ul>
);

PostList.propTypes = { limit: PropTypes.number };
PostList.defaultProps = { limit: posts.length };

export default PostList;

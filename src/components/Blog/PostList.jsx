import React from 'react';
import PropTypes from 'prop-types';
import posts from '../../mock/blogPosts';
import BlogLink from './BlogLink';

const PostList = ({ limit }) => (
  <ul className="timeline blog-list">
    {posts.slice(0, limit).map(({ slug, date, title }) => (
      <li className="timeline__item" key={slug}>
        <span className="timeline__dot" aria-hidden="true" />
        <BlogLink className="timeline__content blog-list__entry" to={`/blog/${slug}/`}>
          <span className="timeline__school">{title}</span>
          <time className="timeline__period" dateTime={date}>
            {date}
          </time>
        </BlogLink>
      </li>
    ))}
  </ul>
);

PostList.propTypes = { limit: PropTypes.number };
PostList.defaultProps = { limit: posts.length };

export default PostList;

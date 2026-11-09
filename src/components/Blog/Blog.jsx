import React from 'react';
import Title from '../Title/Title';
import BlogLink from './BlogLink';
import PostList from './PostList';

const Blog = () => (
  <section id="blog">
    <Title title="Blog" />
    <div className="blog-column">
      <PostList limit={3} />
      <BlogLink className="timeline__link" to="/blog/">
        All posts →
      </BlogLink>
    </div>
  </section>
);

export default Blog;

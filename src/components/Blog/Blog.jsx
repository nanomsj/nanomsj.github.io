import React from 'react';
import { Link } from 'gatsby';
import Title from '../Title/Title';
import PostList from './PostList';

const Blog = () => (
  <section id="blog">
    <Title title="Blog" />
    <div className="blog-column">
      <PostList limit={3} />
      <Link className="timeline__link" to="/blog/">
        All posts →
      </Link>
    </div>
  </section>
);

export default Blog;

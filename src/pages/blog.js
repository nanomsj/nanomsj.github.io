import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import PostList from '../components/Blog/PostList';

const BlogPage = () => (
  <main className="blog-column blog-page">
    <Helmet>
      <title>Blog · Shijia Min</title>
    </Helmet>
    <Link className="timeline__link" to="/#blog">
      ← Home
    </Link>
    <h1>Blog</h1>
    <PostList />
  </main>
);

export default BlogPage;

import React from 'react';
import { Helmet } from 'react-helmet';
import PostList from '../components/Blog/PostList';
import BlogLink from '../components/Blog/BlogLink';

const BlogPage = ({ location }) => (
  <main className="blog-column blog-page">
    <Helmet>
      <title>Blog · Shijia Min</title>
    </Helmet>
    <BlogLink className="timeline__link" to="/#blog" isBack returnTo={location.state?.blogReturn}>
      ← Home
    </BlogLink>
    <h1>Blog</h1>
    <PostList />
  </main>
);

export default BlogPage;

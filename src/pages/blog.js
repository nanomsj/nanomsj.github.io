import React from 'react';
import { Helmet } from 'react-helmet';
import PostList from '../components/Blog/PostList';
import BlogLink from '../components/Blog/BlogLink';
import posts from '../mock/blogPosts';

const categories = new Map();
posts.forEach((post) => {
  const category = post.category || 'Notes';
  if (!categories.has(category)) categories.set(category, []);
  categories.get(category).push(post);
});

const BlogPage = ({ location }) => (
  <main className="blog-column blog-page">
    <Helmet>
      <title>Blog · Shijia Min</title>
    </Helmet>
    <BlogLink className="timeline__link" to="/#blog" isBack returnTo={location.state?.blogReturn}>
      ← Home
    </BlogLink>
    <h1>Blog</h1>
    {[...categories].map(([category, entries]) => (
      <div className="blog-category" key={category}>
        <h2>{category}</h2>
        <PostList entries={entries} />
      </div>
    ))}
  </main>
);

export default BlogPage;

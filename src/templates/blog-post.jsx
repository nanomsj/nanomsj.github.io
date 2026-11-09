import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import PostComments from '../components/Blog/PostComments';

const BlogPost = ({ pageContext: { post } }) => (
  <main className="blog-column blog-page">
    <Helmet>
      <title>{`${post.title} · Shijia Min`}</title>
    </Helmet>
    <Link className="timeline__link" to="/blog/">
      ← All posts
    </Link>
    <article className="blog-article">
      <h1>{post.title}</h1>
      <time className="timeline__period" dateTime={post.date}>
        {post.date}
      </time>
      <p className="blog-body">{post.body.join('\n\n')}</p>
    </article>
    <PostComments path={`/blog/${post.slug}/`} />
  </main>
);

BlogPost.propTypes = {
  pageContext: PropTypes.shape({
    post: PropTypes.shape({
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      body: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogPost;

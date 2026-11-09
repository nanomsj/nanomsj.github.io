import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import PostComments from '../components/Blog/PostComments';
import BlogLink from '../components/Blog/BlogLink';

const BlogPost = ({ pageContext: { post }, location }) => (
  <main className="blog-column blog-page">
    <Helmet>
      <title>{`${post.title} · Shijia Min`}</title>
    </Helmet>
    <BlogLink className="timeline__link" to="/blog/" isBack returnTo={location.state?.blogReturn}>
      {location.state?.blogReturn?.url.startsWith('/blog/') === false ? '← Home' : '← All posts'}
    </BlogLink>
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

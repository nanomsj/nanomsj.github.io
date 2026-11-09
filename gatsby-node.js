const path = require('path');
const posts = require('./src/mock/blogPosts');

exports.createPages = ({ actions }) => {
  posts.forEach((post) => {
    actions.createPage({
      path: `/blog/${post.slug}/`,
      component: path.resolve('./src/templates/blog-post.jsx'),
      context: { post },
    });
  });
};

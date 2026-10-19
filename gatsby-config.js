module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'Shijia Min',
    description:
      'Shijia Min - Biostatistics undergraduate at Peking University.',
    siteUrl: 'https://nanomsj.github.io',
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
};

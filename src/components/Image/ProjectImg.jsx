import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ProjectImg = ({ filename, alt }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { relativePath: { ne: "" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 1366, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const image = data.images.edges.find(
    (edge) => edge.node.relativePath === filename,
  );

  if (!image) return <span>Picture not found</span>;

  return <Img alt={alt || 'Project'} fluid={image.node.childImageSharp.fluid} />;
};

export default ProjectImg;

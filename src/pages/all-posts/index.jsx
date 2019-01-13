import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from 'components/Layout/Container';
import SimpleList from 'components/Pages/Common/Simple/List';

export default function AllPosts({ data }) {
  return (
    <Layout>
      <h1>All posts</h1>
      <SimpleList edges={data.allMarkdownRemark.edges} />
    </Layout>
  );
}

AllPosts.propTypes = {
  data: PropTypes.object
};

export const pageQuery = graphql`
  query AllPostsQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___published], order: DESC }) {
      edges {
        node {
          frontmatter {
            publishedDate: published(formatString: "DD MMMM, YYYY")
            title
            description
            slug
            tags
          }
        }
      }
    }
  }
`;
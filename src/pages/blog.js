import * as React from 'react'
import { graphql } from "gatsby"
import { LocalizedLink as Link, useLocalization } from "gatsby-theme-i18n"
import Layout from '../components/layout'

const Blog = ({ data, pageContext }) => {
  const { locale } = useLocalization()

  const postList = data.blogList;
  console.log("Blog List \n", postList);

  return (
    <Layout pageContext={pageContext} pageTitle="My Blog Posts">
      <h1>Blog - {locale}</h1>
      <p>Total: {postList.totalCount}</p>
      <br/>
      {
        postList.nodes.map(({ childMdx: node }) => (
          <article key={node.frontmatter.slug}>
            <h2>
              <Link to={`/blog${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>            
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
    </Layout>
  )
}
//<Link to={`/blog/${node.frontmatter.slug}`}>
//<Link to={node.frontmatter.slug}>
//<Link to={node.slug}>

export const query = graphql`
  query($locale: String!) {
    blogList: allFile(
      filter: {
        sourceInstanceName: { eq: "blog" }
        childMdx: { fields: { locale: { eq: $locale } } }
      }
    ) {
      totalCount
      nodes {
        childMdx {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            slug
            title            
          }
          id
        }
      }
    }
  }
`

export default Blog

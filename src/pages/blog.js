import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  const blogList = data.blogList.nodes
  console.log(blogList)

  return (
    <Layout pageTitle="My Blog Posts">
      <p>The list of my cool posts</p>
      <br/>
      <ul>
        {
          blogList.map(node => (
            <article key={node.id}>
              <h2>{node.frontmatter.title}</h2>
              <p>Posted: {node.frontmatter.date}</p>
              <MDXRenderer>
                {node.body}
              </MDXRenderer>              
          </article>
          ))
        }
      </ul>      
    </Layout>
  )
}

export const query = graphql`
  query {
    blogList: allMdx(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {fileAbsolutePath: {regex: "/blog/"}}
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`

export default BlogPage
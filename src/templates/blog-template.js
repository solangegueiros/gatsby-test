import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from "../components/layout"

const BlogTemplate = ({ data, pageContext }) => {
  var title = "Not translated"
  if (data.mdx) {
    var image = getImage(data.mdx.frontmatter.hero_image)
    title = data.mdx.frontmatter.title
  }

  return (
    <Layout pageContext={pageContext} pageTitle={title}>
      <h2>Content page</h2>
      <div>
        {data.mdx ? (
          <>
          <GatsbyImage
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
          />
          <p>{data.mdx.frontmatter.hero_image_alt}</p>

          <p>{data.mdx.frontmatter.date}</p>
          <br/>
          <MDXRenderer>
            {data.mdx.body}
          </MDXRenderer>
        </>
        ) : (
          <div>This page hasn't been translated yet</div>
        )}
      </div>

      <h2>Context info</h2>
      <p>pageContext.originalPath: {pageContext.originalPath}</p>
      <pre>{JSON.stringify(pageContext, null, 2)}</pre>
    </Layout>
  )
}

export default BlogTemplate

export const query = graphql`
  query($locale: String!, $slug: String!) {
    mdx(
      fields: { locale: { eq: $locale } }
      frontmatter: { slug: { eq: $slug } }
    ) {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        slug
        title
      }
      body
    }
  }
`

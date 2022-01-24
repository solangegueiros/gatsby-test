exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogTemplate = require.resolve(`./src/templates/blog-template.js`)

  const result = await graphql(`
    {
      blog: allFile(filter: { 
        sourceInstanceName: { eq: "blog" }, 
        extension: {regex: "/(md)|(mdx)/"}
      }) {
        nodes {
          childMdx {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(result.errors)
    return
  }

  //GraphQl result:
  //console.log(JSON.stringify(result, null, 4))

  const blogPosts = result.data.blog.nodes

  blogPosts.forEach(({ childMdx: node }, index) => {
    if (!node) {
      console.log ("ERROR childMdx is NULL", blogPosts[index].relativePath)
      return
    }

    var slug = node.frontmatter.slug
    console.log('createPage slug: ', slug)

    createPage({
      path: '/blog'+slug,
      component: blogTemplate,
      context: {
        slug: slug,
      },
    })
    //console.log('blog slug: ', node.frontmatter.slug)
  })
}

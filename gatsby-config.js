module.exports = {
    siteMetadata: {
        title: "Gatsby test",
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
              name: `blog`,
              path: `${__dirname}/content/blog`,
            }
        },
        "gatsby-plugin-mdx",        
    ]
}
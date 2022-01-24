module.exports = {
    siteMetadata: {
        siteUrl: `https://test.solange.blog.br`,
        title: "Gatsby test",
        description: "Gatsby tests",
        author: "Solange Gueiros",        
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              path: `${__dirname}/src/pages`,
              name: `pages`,
            },
          },        
        {
            resolve: "gatsby-source-filesystem",
            options: {              
              path: `${__dirname}/content/blog`,
              name: `blog`,
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {              
              path: `${__dirname}/content/event`,
              name: `event`,
            }
        },
        `gatsby-plugin-react-helmet`,
        {
          resolve: `gatsby-theme-i18n`,
          options: {
            defaultLang: `en`,
            locales: `en es pt`,
            configPath: require.resolve(`./i18n/config.json`),
          },
        },
        {
          resolve: `gatsby-plugin-mdx`,
          options: {
            defaultLayouts: {
              default: require.resolve(`./src/components/layout.js`),
            },
          },
        },
        "gatsby-transformer-sharp",
    ]
}
import * as React from 'react'
import { LocalizedLink, useLocalization } from "gatsby-theme-i18n"
import Layout from '../components/layout'

const About = ({ pageContext }) => {
  const { locale } = useLocalization()

  return (
    <Layout pageTitle="About Me" pageContext={pageContext}>
      <p>Locale: {locale}.</p>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <p>
        <LocalizedLink to="/">Link to index page</LocalizedLink>
      </p>      
    </Layout>
  )
}

export default About
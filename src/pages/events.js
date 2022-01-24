import * as React from 'react'
import { graphql } from "gatsby"
import { LocalizedLink as Link, useLocalization } from "gatsby-theme-i18n"
import Layout from '../components/layout'

const Events = ({ data, pageContext }) => {
  const { locale } = useLocalization()

  return (
    <Layout pageContext={pageContext} pageTitle="My Blog Posts">
      <h1>Events - {locale}</h1>
    </Layout>
  )
}

export default Events

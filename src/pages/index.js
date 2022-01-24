import * as React from 'react'
import { LocalizedLink, useLocalization } from "gatsby-theme-i18n"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const Index = ({ data, pageContext }) => {
  const { locale } = useLocalization()

  return (
    <Layout pageTitle="Home Page" pageContext={pageContext}>
      <p>Gatsby test</p>
      <StaticImage
        alt="Tigrinho olhando o mapa em Salt Lake City, EUA"
        src="../images/SaltLakeCity-Downtown-DSC09635.jpg"
      />
      <br/>
    </Layout>
  )
}

export default Index

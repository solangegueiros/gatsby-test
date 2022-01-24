import * as React from 'react'
import { MdxLink, LocalizedLink as Link, useLocalization } from "gatsby-theme-i18n"
import Language from "../components/language"
import { useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,  
} from './layout.module.css'

const components = {
  a: MdxLink,
}

const Layout = ({ pageTitle, children, pageContext }) => {
  const { locale } = useLocalization()

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  //console.log("Layout \n", data);

  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={siteTitle}>
        <Link to="/">
          {data.site.siteMetadata.title}
        </Link>        
      </header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog {locale}
            </Link>
          </li>          
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About {locale}
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/locales" className={navLinkText}>
              Locales info
            </Link>
          </li>          
        </ul>
      </nav>
      <Language pageContext={pageContext}/>

      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from '../components/Footer'
import "./layout.css"



const Layout = ({ children }) => (
  
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        },
        allContentfulLink {
          edges {
            node {
              title
              url
            }
          }
        }
      }
    `}
    render={data => (
      <>
        
          <main>{children}
          <Footer 
          data={data}
          />
          </main>
          
      </>
      
    )}
    
  />
  

  
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout



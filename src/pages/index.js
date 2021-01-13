import React from "react"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Cards from "../components/cards"
import SEO from "../components/seo"

const IndexPage = props => {
  return (
    <Layout
      style={{
        backgroundRepeat: "repeat-y",
        backgroundImage: `url(${props.data.allContentfulAsset.edges[0].node.file.url})`,
      }}
    >
      <SEO title="Home" />

      <Container fluid>
        <div className="content-box">
          <Hero content={props.data.allContentfulHero.edges[0].node} />
          <Cards products={props.data.allContentfulProduct.edges} />
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query MyQuery {
    allContentfulProduct(sort: { fields: id, order: ASC }) {
      edges {
        node {
          header
          body
          image {
            file {
              url
              fileName
              contentType
            }
          }
          id
        }
      }
    }
    allContentfulAsset {
      edges {
        node {
          file {
            url
            fileName
            contentType
          }
        }
      }
    }
    indexImage: file(relativePath: { eq: "hero-background@2x.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allContentfulHero {
      edges {
        node {
          title
          subtitle
          description
        }
      }
    }
  }
`

import React from "react"
import Link from "gatsby-link"

import Layout from "../components/layout"
import Image from "../components/image"

const IndexPage = ({ data }) => console.log(data) || (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image fluid={data.placeholderImage.childImageSharp.fluid}/>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const pageQuery = graphql`
  query GetImage {
    placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid: resolutions(width: 300) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`

export default IndexPage

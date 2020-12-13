import * as React from "react"
import Layout from "./containers/layout"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
  listStyleType: "none",
}
const listItemStyles = {
  marginBottom: 12,
  fontWeight: "300",
  letterSpacing: 1,
}
const linkStyles = {
  color: "#8954A8",
}


// markup
const IndexPage = ({data}) => {
  return (
    <Layout>
      {data.allWordpressPost.nodes.map((node, index) => (
        <div key={index}>
          <h1>{node.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: node.content }} />
        </div>
      ))}
    </Layout>
  )
}

export default IndexPage;

export const pageQuery = graphql`
query MyQuery {
  allWordpressPost {
    nodes {
      id
      slug
      title
      content
    }
  }
}
`



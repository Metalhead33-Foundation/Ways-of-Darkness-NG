import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const BlogIndex = ({ data }) => {
    const { edges: posts } = data.allMdx
    return (
        <Layout>
            <h1>Articles</h1>
            <ul>
                {posts.map(({ node: post }) => (
                    <li key={post.id}>
                        <Link to={post.fields.slug}>
                            <h2>{post.frontmatter.title}</h2>
                        </Link>
                        <p>{post.html}</p>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}
export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          html
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogIndex
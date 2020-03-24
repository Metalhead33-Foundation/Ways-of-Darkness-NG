import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import IPA2 from "./modules/ipa";
import Age from "./modules/age";
import {CurrentTime} from "./modules/current-time";
import {City, Character, Race, State, House, Event, Religion, Lore, Class} from "./modules/links";
import {DemographicsGenerator} from "./modules/demographics-generator";
import Layout from "./layout"

const shortcodes = {
    Link,
    IPA2,
    Age,
    City,Character,Race,State,House,Event,Religion,Lore, Class,DemographicsGenerator,
    wrapper: ({children}) => (
        <div className="main">{children}</div>
    ),
}; // Provide common components here

const props = {
    CurrentTime
};

export default function PageTemplate({ data: { mdx } }) {
    return (
        <Layout>
            <h1>{mdx.frontmatter.title}</h1>
            <MDXProvider components={shortcodes}>
                <MDXRenderer {...props} {...mdx.frontmatter} >{mdx.body}</MDXRenderer>
            </MDXProvider>
        </Layout>
    )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }`;
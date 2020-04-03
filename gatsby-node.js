/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const  { createFilePath } = require("gatsby-source-filesystem");
const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === "Mdx" ) {
        const value = createFilePath({node, getNode})

        createNodeField({
            name: "slug",
            node,
            value: `/article${value}`,
        })
    }
};

async function loadForums({graphql,createPage}) {
    const forums = await graphql(
        `
        query {
            allForumJson {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
        }
        `
    )

    const indexTemplate = path.resolve(`src/templates/forum-index.tsx`);

    forums.data.allForumJson.edges.forEach(edge => {
        createPage({
            path: `/forum/${edge.node.name}/`,
            component: indexTemplate,
            context: {
                id: edge.node.id
            }
        })
    })
}

async function loadTopics({graphql,createPage}) {
    const forums = await graphql(
        `
        query {
            allTopicJson {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
        }
        `
    )

    const indexTemplate = path.resolve(`src/templates/topic.tsx`);

    forums.data.allTopicJson.edges.forEach(edge => {
        createPage({
            path: `/forum/${edge.node.name}/`,
            component: indexTemplate,
            context: {
                id: edge.node.id
            }
        })
    })}

exports.createPages = async ({ graphql, actions, reporter }) => {
    // Destructure the createPage function from the actions object
    const { createPage } = actions
    let result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)
    if (result.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
    }
    // Create blog post pages.
    const posts = result.data.allMdx.edges
    // you'll call `createPage` for each result
    posts.forEach(({ node }, index) => {
        createPage({
            // This is the slug you created before
            // (or `node.frontmatter.slug`)
            path: node.fields.slug,
            // This component will wrap our MDX content
            component: path.resolve(`./src/components/posts-page-layout.tsx`),
            // You can use the values in this context in
            // our page layout component
            context: { id: node.id },
        })
    })

    await loadForums({graphql, createPage});
    await loadTopics({graphql, createPage});
}
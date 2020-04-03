import React from "react"
import {graphql, Link} from "gatsby";
import Layout from "../components/layout"

const ForumIndex = ({data}) => {
    const {name, subs, topics} = data.forumJson;

    return <Layout>
        <h1>{name}</h1>
        <h2>Forums</h2>
        <ul>
            {
                subs.map(sub => <li><Link to={"/forum"+sub}>{sub}</Link></li>)
            }
        </ul>
        <h2>Topics</h2>
        <ul>
            {
                topics.map(topic => <li><Link to={"/forum"+topic}>{topic.substring(1)}</Link></li>)
            }
        </ul>
    </Layout>
}

export default ForumIndex;

export const pageQuery = graphql`
query($id: String!) {
    forumJson(id: { eq: $id }) {
        name
        subs
        topics
    }
}
`;
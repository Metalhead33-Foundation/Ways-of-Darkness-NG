import React from "react"
import {graphql, Link} from "gatsby";
import Layout from "../components/layout"

const ForumIndex = ({data}) => {
    const {name, posts} = data.topicJson;

    return <Layout>
        <h1>{name}</h1>
        <ul className="thread">
            {
                posts.map(({name,date,content}) => (
                        <li className="post">
                            <div className="character">{name}</div>
                            <div className="date">{date}</div>
                            <div className="content" dangerouslySetInnerHTML={{__html: content.replace(/\*([^*]+)\*/,"<b>$1</b>").replace(/~([^~]+)~/,"<i>$1</i>").replace(/-([^\-]+)-/,"<span class='action'>- $1 -</span>")}} />
                        </li>
                    )
                )
            }
        </ul>
    </Layout>
}

export default ForumIndex;

export const pageQuery = graphql`
query($id: String!) {
    topicJson(id: { eq: $id }) {
        name
        posts {
            content
            date
            name
        }
    }
}
`;
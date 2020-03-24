import React from "react"
import { graphql } from "gatsby"

export default function Template({
    data
 }) {
    return (<div>
        <p>Say wut</p>
        {data}
    </div>)
}


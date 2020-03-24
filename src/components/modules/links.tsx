import React from "react"
import {Link} from "gatsby";

function link(prefix?: string): ({name: string, children: any}) => any {
    return ({name, children}) => {
        return <Link to={(prefix||"") + name}>{children || name}</Link>
    }
}

export const City = link();
export const Race = link();
export const State = link();
export const Character = link();
export const House = link();
export const Event = link();
export const Religion = link();
export const Lore = link();
export const Class = link();
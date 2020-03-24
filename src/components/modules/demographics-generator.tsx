import React from "react"
import {PopInfo} from "../../../data/demographics";
import {query, QueryResult} from "./pop-query";

function DemographicsTable({groups, total} : {groups: QueryResult, total: number}) {
    return (<table>
        <thead>
        <tr>
            <th>Race</th>
            <th>Quantity</th>
            <th>Percentage</th>
        </tr>
        </thead>
        <tbody>
        {
            Object.entries(groups).map(([key, value]: [string,number]) => {
                return (<tr>
                    <td>{key}</td>
                    <td>{value}</td>
                    <td>{`${(Math.floor(value / total * 10000) / 100)}%`}</td>
                </tr>)
            })
        }
        </tbody>
    </table>)
}

export function DemographicsGenerator({generate, country}) {
    const groupByRace = (pop: PopInfo): string => pop.race.name;

    const groups = query({groupBy:groupByRace, countryFilter: [country]});
    const total = Object.values(groups).reduce((acc, quantity) => acc + quantity, 0);

    switch (generate) {
        default:
            return <DemographicsTable groups={groups} total={total}/>;
        case 'bar':
            return <p>Not implemented</p>;
        case 'raw':
            return JSON.stringify(groups);
    }
}
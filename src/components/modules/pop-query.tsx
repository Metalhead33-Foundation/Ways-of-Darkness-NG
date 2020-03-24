import {demographics, PopInfo} from "../../../data/demographics";

function filter<T>(value: T, filter?: T[]) {
    if (filter === undefined) {
        return true
    }

    return filter.reduce((ans, curr) => ans || (value === curr), false);
}

interface Filter {
    raceFilter?: string[],
    religionFilter?: string[],
    occupationFilter?: string[],
    agegroupFilter?: string[],
    genderFilter?: string[],
    countryFilter?: string[],
    regionFilter?: string[],
    areaFilter?: string[],
}

function filterpops(
    {raceFilter,religionFilter,occupationFilter,agegroupFilter,genderFilter,countryFilter,regionFilter,areaFilter}:Filter
    ) {
    return demographics.filter(({race, religion, occupation, ageGroup, gender, area}) =>
         filter(race.name,raceFilter) &&
         filter(religion.name,religionFilter) &&
         filter(occupation.name,occupationFilter) &&
         filter(ageGroup.name,agegroupFilter) &&
         filter(gender,genderFilter) &&
         filter(area.region.country.name,countryFilter) &&
         filter(area.region.name,regionFilter) &&
         filter(area.name,areaFilter)
    )
}

interface Query extends Filter{
    groupBy: (pop: PopInfo) => string
}

export interface QueryResult {
    [id: string]: number
}

export function query({groupBy, ...others}: Query) : QueryResult {
    const pops = filterpops(others)

    return pops.reduce((map, pop) => {
        map[groupBy(pop)] = (map[groupBy(pop)] || 0) + pop.quantity;
        return map;
    }, {});
}
import {countries, Country} from "./countries";

export interface RegionData {
    regionID: number
    regionName: string
    countryID: number
}

export interface Region {
    id: number
    name: string
    country: Country
}

const regions_data : Region[] = [
    {
        id: 1,
        name: "Hro'z",
        country_id: 9
    },
    {
        id: 2,
        name: "Kro'm",
        country_id: 9
    },
    {
        id: 3,
        name: "Bru'k",
        country_id: 9
    },
    {
        id: 4,
        name: "Pri'd",
        country_id: 9
    },
    {
        id: 5,
        name: "Dhaeraow Loomin",
        country_id: 2
    },
    {
        id: 6,
        name: "Gurtha Ndengin",
        country_id: 2
    },
    {
        id: 7,
        name: "Mori Templa Mellon",
        country_id: 2
    },
    {
        id: 8,
        name: "Southern Etrand",
        country_id: 3
    },
    {
        id: 9,
        name: "Western Etrand",
        country_id: 3
    },
    {
        id: 10,
        name: "Northern Frontier",
        country_id: 3
    },
    {
        id: 11,
        name: "Northern Mountains",
        country_id: 3
    },
    {
        id: 12,
        name: "Inner Etrand",
        country_id: 3
    },
    {
        id: 13,
        name: "Northern Etrancoast",
        country_id: 4
    },
    {
        id: 14,
        name: "Southern Etrancoast",
        country_id: 4
    },
    {
        id: 15,
        name: "Inner Froturn",
        country_id: 5
    },
    {
        id: 16,
        name: "The Froturnish Coastlands",
        country_id: 5
    },
    {
        id: 17,
        name: "Southeastern Froturn",
        country_id: 5
    },
    {
        id: 18,
        name: "Northeastern Froturn",
        country_id: 5
    },
    {
        id: 19,
        name: "Northwestern Dragoc",
        country_id: 6
    },
    {
        id: 20,
        name: "Southwestern Dragoc",
        country_id: 6
    },
    {
        id: 21,
        name: "Northeastern Dragoc",
        country_id: 6
    },
    {
        id: 22,
        name: "Southeastern Dragoc",
        country_id: 6
    },
    {
        id: 23,
        name: "Artaburro",
        country_id: 7
    },
    {
        id: 24,
        name: "Neressa",
        country_id: 8
    },
    {
        id: 25,
        name: "Keldorn",
        country_id: 10
    },
    {
        id: 26,
        name: "Gabyr",
        country_id: 11
    },
    {
        id: 27,
        name: "Antanath",
        country_id: 15
    }
].map(({id, name, country_id}) => {
    return {
        id,
        name: name,
        country: countries.find(country_id)
    }
});

export const regions = {
    find: (id) => regions_data.find(({id: regionID}) => id == regionID),
    all: () => regions_data,
};
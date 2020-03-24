import {Region, regions} from "./regions";

export interface AreaData {
    id: number
    name: string
    region_id: number
    rural: boolean
}

export interface Area {
    id: number
    name: string
    region: Region
    rural: boolean
}

const areas_data : Area[] = [
    {
        "id": 1,
        "name": "Hro'z",
        "region_id": 1,
        "rural": false
    },
    {
        "id": 2,
        "name": "Kro'm",
        "region_id": 2,
        "rural": false
    },
    {
        "id": 3,
        "name": "Bru'k",
        "region_id": 3,
        "rural": false
    },
    {
        "id": 4,
        "name": "Pri'd",
        "region_id": 4,
        "rural": false
    },
    {
        "id": 5,
        "name": "Dhaeraow Loomin",
        "region_id": 5,
        "rural": false
    },
    {
        "id": 6,
        "name": "Gurtha Ndengin",
        "region_id": 6,
        "rural": false
    },
    {
        "id": 7,
        "name": "Mori Templa Mellon",
        "region_id": 7,
        "rural": false
    },
    {
        "id": 8,
        "name": "Rural Southern Etrand",
        "region_id": 8,
        "rural": true
    },
    {
        "id": 9,
        "name": "Rural Western Etrand",
        "region_id": 9,
        "rural": true
    },
    {
        "id": 10,
        "name": "Rural Northern Frontier",
        "region_id": 10,
        "rural": true
    },
    {
        "id": 11,
        "name": "Rural Northern Mountains",
        "region_id": 11,
        "rural": true
    },
    {
        "id": 12,
        "name": "Rural Inner Etrand",
        "region_id": 12,
        "rural": true
    },
    {
        "id": 13,
        "name": "Rural Northern Etrancoast",
        "region_id": 13,
        "rural": true
    },
    {
        "id": 14,
        "name": "Rural Southern Etrancoast",
        "region_id": 14,
        "rural": true
    },
    {
        "id": 15,
        "name": "Rural Inner Froturn",
        "region_id": 15,
        "rural": true
    },
    {
        "id": 16,
        "name": "Rural Froturnish Coastlands",
        "region_id": 16,
        "rural": true
    },
    {
        "id": 17,
        "name": "Rural Southeastern Froturn",
        "region_id": 17,
        "rural": true
    },
    {
        "id": 18,
        "name": "Rural Northeastern Froturn",
        "region_id": 18,
        "rural": true
    },
    {
        "id": 19,
        "name": "Rural Northwestern Dragoc",
        "region_id": 19,
        "rural": true
    },
    {
        "id": 20,
        "name": "Rural Southwestern Dragoc",
        "region_id": 20,
        "rural": true
    },
    {
        "id": 21,
        "name": "Rural Northeastern Dragoc",
        "region_id": 21,
        "rural": true
    },
    {
        "id": 22,
        "name": "Rural Southeastern Dragoc",
        "region_id": 22,
        "rural": true
    },
    {
        "id": 23,
        "name": "Rural Artaburro",
        "region_id": 23,
        "rural": true
    },
    {
        "id": 24,
        "name": "Rural Neressa",
        "region_id": 24,
        "rural": true
    },
    {
        "id": 25,
        "name": "Rural Keldorn",
        "region_id": 25,
        "rural": true
    },
    {
        "id": 26,
        "name": "Rural Gabyr",
        "region_id": 26,
        "rural": true
    },
    {
        "id": 27,
        "name": "Antanath",
        "region_id": 27,
        "rural": false
    },
    {
        "id": 28,
        "name": "Zorod Naugi im Pkhaur",
        "region_id": 11,
        "rural": false
    },
    {
        "id": 29,
        "name": "Zorod Koldo im Neuna",
        "region_id": 11,
        "rural": false
    },
    {
        "id": 30,
        "name": "Steelhelm",
        "region_id": 10,
        "rural": false
    },
    {
        "id": 31,
        "name": "Grandfolk",
        "region_id": 9,
        "rural": false
    },
    {
        "id": 32,
        "name": "Dracfold",
        "region_id": 12,
        "rural": false
    },
    {
        "id": 33,
        "name": "Copperport",
        "region_id": 12,
        "rural": false
    },
    {
        "id": 34,
        "name": "Talon",
        "region_id": 8,
        "rural": false
    },
    {
        "id": 35,
        "name": "Etrocast",
        "region_id": 8,
        "rural": false
    },
    {
        "id": 36,
        "name": "Yrvhaven",
        "region_id": 13,
        "rural": false
    },
    {
        "id": 37,
        "name": "Waterburcht",
        "region_id": 14,
        "rural": false
    },
    {
        "id": 38,
        "name": "Architon",
        "region_id": 18,
        "rural": false
    },
    {
        "id": 39,
        "name": "Minosa",
        "region_id": 19,
        "rural": false
    },
    {
        "id": 40,
        "name": "Helpulus",
        "region_id": 17,
        "rural": false
    },
    {
        "id": 41,
        "name": "Rodiou",
        "region_id": 20,
        "rural": false
    },
    {
        "id": 42,
        "name": "Alta Gon",
        "region_id": 23,
        "rural": false
    },
    {
        "id": 43,
        "name": "Yaara Linde",
        "region_id": 23,
        "rural": false
    },
    {
        "id": 44,
        "name": "Kelu e Taure",
        "region_id": 23,
        "rural": false
    },
    {
        "id": 45,
        "name": "Yanus",
        "region_id": 15,
        "rural": false
    },
    {
        "id": 46,
        "name": "Wohun",
        "region_id": 15,
        "rural": false
    },
    {
        "id": 47,
        "name": "Noldo Ranga",
        "region_id": 17,
        "rural": false
    },
    {
        "id": 48,
        "name": "Edhel Yaara",
        "region_id": 17,
        "rural": false
    },
    {
        "id": 49,
        "name": "Magnus Nex Urbs",
        "region_id": 25,
        "rural": false
    },
    {
        "id": 50,
        "name": "Atrum Libri",
        "region_id": 25,
        "rural": false
    },
    {
        "id": 51,
        "name": "Nex Mucro",
        "region_id": 25,
        "rural": false
    },
    {
        "id": 52,
        "name": "Gabyr City",
        "region_id": 25,
        "rural": false
    },
    {
        "id": 53,
        "name": "Neressa City",
        "region_id": 24,
        "rural": false
    }
].map(({id, name, region_id, rural}) : Area => {
    return {
        name,
        id,
        region: regions.find(region_id),
        rural,
    }
});

export const areas = {
    find: (id) => areas_data.find(({id: areaID}) => id === areaID),
    all: () => areas_data,
};
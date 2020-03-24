
export interface CountryData {
    countryID: number
    countryName: string
}

export interface Country {
    id: number
    name: string
}

const countries_data: Country[] = [
    {
        "id": 1,
        "name": "Wildlands"
    },
    {
        "id": 2,
        "name": "Underground"
    },
    {
        "id": 3,
        "name": "Etrand"
    },
    {
        "id": 4,
        "name": "Etrancoast"
    },
    {
        "id": 5,
        "name": "Froturn"
    },
    {
        "id": 6,
        "name": "Dragoc"
    },
    {
        "id": 7,
        "name": "Artaburro"
    },
    {
        "id": 8,
        "name": "Neressa"
    },
    {
        "id": 9,
        "name": "Brutang"
    },
    {
        "id": 10,
        "name": "Keldorn"
    },
    {
        "id": 11,
        "name": "Gabyr"
    },
    {
        "id": 12,
        "name": "Shár"
    },
    {
        "id": 13,
        "name": "Týrýng"
    },
    {
        "id": 14,
        "name": "Shíd"
    },
    {
        "id": 15,
        "name": "Antanath"
    }
];

export const countries = {
    find: (id): Country => countries_data.find(({id: countryID}) => id === countryID),
    all: (): Country[] => countries_data,
}
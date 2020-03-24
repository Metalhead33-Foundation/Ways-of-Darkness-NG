export interface Occupation {
    id: number
    name: string
}

const occupations_data: Occupation[] = [
    {
        "id": 1,
        "name": "Unemployed"
    },
    {
        "id": 2,
        "name": "Students"
    },
    {
        "id": 3,
        "name": "Farmers"
    },
    {
        "id": 4,
        "name": "Labourers"
    },
    {
        "id": 5,
        "name": "Slaves"
    },
    {
        "id": 6,
        "name": "Craftsmen"
    },
    {
        "id": 7,
        "name": "Artisans"
    },
    {
        "id": 8,
        "name": "Servicemen"
    },
    {
        "id": 9,
        "name": "Entertainers"
    },
    {
        "id": 10,
        "name": "Bureaucrats"
    },
    {
        "id": 11,
        "name": "Intellctuals"
    },
    {
        "id": 12,
        "name": "Clergymen"
    },
    {
        "id": 13,
        "name": "Soldiers"
    },
    {
        "id": 14,
        "name": "Nobles"
    },
    {
        "id": 15,
        "name": "Merchants"
    },
    {
        "id": 16,
        "name": "Criminals"
    }
]

export const occupations = {
    find: (id: number): Occupation => occupations_data.find(({id: occupationID}) => id === occupationID),
    all: (): Occupation[] => occupations_data,
}
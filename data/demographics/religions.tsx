export interface Religion {
    id: number
    name: string
}

const religions_data: Religion[] = [
    {
        "id": 1,
        "name": "Atheism"
    },
    {
        "id": 2,
        "name": "Proto-Elven Religion"
    },
    {
        "id": 3,
        "name": "Church of Titanius"
    },
    {
        "id": 4,
        "name": "Cult of Nature"
    },
    {
        "id": 5,
        "name": "Orcish Religion"
    },
    {
        "id": 6,
        "name": "Fire Cult"
    },
    {
        "id": 7,
        "name": "Dark Elven Religion"
    },
    {
        "id": 8,
        "name": "Dragon Religion"
    },
    {
        "id": 9,
        "name": "Lizardman Religion"
    },
    {
        "id": 10,
        "name": "Halfling Paganism"
    },
    {
        "id": 11,
        "name": "Demonic Religion"
    },
    {
        "id": 12,
        "name": "Human Paganism"
    },
    {
        "id": 13,
        "name": "Dwarven Religion"
    },
    {
        "id": 14,
        "name": "Aeséni Shamanism"
    },
    {
        "id": 15,
        "name": "Goblin Shamanism"
    },
    {
        "id": 16,
        "name": "Ten Heavenly Principles"
    },
    {
        "id": 17,
        "name": "Shár Imperial Cult"
    },
    {
        "id": 18,
        "name": "Shár Folk Religion"
    },
    {
        "id": 19,
        "name": "Syncretism (Shár Folk Religion + Ten Heavenly Principles)"
    },
    {
        "id": 20,
        "name": "Sak Shamanism"
    },
    {
        "id": 21,
        "name": "Syncretism (Sak Shamanism + Ten Heavenly Principles)"
    },
    {
        "id": 22,
        "name": "Azisiri Paganism"
    },
    {
        "id": 23,
        "name": "Syncretism (Azisiri Paganism + Ten Heavenly Principles)"
    },
    {
        "id": 24,
        "name": "Týrýng Folk Religion"
    },
    {
        "id": 25,
        "name": "Syncretism (Týrýng Folk Religion + Ten Heavenly Principles)"
    },
    {
        "id": 26,
        "name": "Shíd Royal Cult"
    },
    {
        "id": 27,
        "name": "Shíd Fetishism"
    }
];

export const religions = {
    find: (id): Religion => religions_data.find(({id: religionID}) => id === religionID),
    all: ():Religion[] => religions_data,
};
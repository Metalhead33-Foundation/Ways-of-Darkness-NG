export interface Race {
    id: number
    name: string
    name_hun?: string
}

const races_data: Race[] = [
    {
        "id": 1,
        "name": "Proto-Elf",
        "name_hun": "Őself"
    },
    {
        "id": 2,
        "name": "High Elf",
        "name_hun": "Nemeself"
    },
    {
        "id": 3,
        "name": "Wood Elf",
        "name_hun": "Erdőelf"
    },
    {
        "id": 4,
        "name": "Dark Elf",
        "name_hun": "Sötételf"
    },
    {
        "id": 5,
        "name": "Half-Elf",
        "name_hun": "Félelf"
    },
    {
        "id": 6,
        "name": "Human",
        "name_hun": "Ember"
    },
    {
        "id": 7,
        "name": "Orc",
        "name_hun": "Ork"
    },
    {
        "id": 8,
        "name": "Half-Orc",
        "name_hun": "Félork"
    },
    {
        "id": 9,
        "name": "Massenpreost Despotanfras",
        "name_hun": "Massenpreost Despotanfras"
    },
    {
        "id": 10,
        "name": "Lizardman",
        "name_hun": "Gyíkember"
    },
    {
        "id": 11,
        "name": "Dwarf",
        "name_hun": "Törp"
    },
    {
        "id": 12,
        "name": "Gnome",
        "name_hun": "Gnóm"
    },
    {
        "id": 13,
        "name": "Halfling",
        "name_hun": "Félszerzet"
    },
    {
        "id": 14,
        "name": "Goblin",
        "name_hun": "Goblin"
    },
    {
        "id": 15,
        "name": "Ogre",
        "name_hun": "Ogre"
    },
    {
        "id": 16,
        "name": "Dragon",
        "name_hun": "Sárkány"
    },
    {
        "id": 17,
        "name": "Nereid",
        "name_hun": "Nereid"
    },
    {
        "id": 18,
        "name": "Aeséni",
        "name_hun": "Aeséni"
    },
    {
        "id": 19,
        "name": "Winged Cobra",
        "name_hun": "Szárnyas kobra"
    },
    {
        "id": 20,
        "name": "Demon",
        "name_hun": "Démon"
    },
    {
        "id": 21,
        "name": "Angel",
        "name_hun": "Angyal"
    },
    {
        "id": 22,
        "name": "Limjiang",
        "name_hun": "Limjiang"
    },
    {
        "id": 23,
        "name": "Týrýng"
    },
    {
        "id": 24,
        "name": "Azisiri"
    },
    {
        "id": 25,
        "name": "Shíd"
    }
];

export const races = {
    find: (id): Race => races_data.find(({id: raceID}) => id === raceID),
    all: ():Race[] => races_data,
};
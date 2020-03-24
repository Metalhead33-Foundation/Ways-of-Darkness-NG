export interface AgeGroup {
    id: number;
    name: string;
}

const age_groups_data: AgeGroup[] = [
    {
        "id": 1,
        "name": "Underage"
    },
    {
        "id": 2,
        "name": "Adult"
    },
    {
        "id": 3,
        "name": "Elderly"
    }
];

export const age_groups = {
    find: (id) : AgeGroup => age_groups_data.find(({id: ageGroupID}) => ageGroupID === id),
    all: () : AgeGroup[] => age_groups_data,
};
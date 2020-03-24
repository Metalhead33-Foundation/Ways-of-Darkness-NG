import {pops} from "./pops";
import {Religion, religions} from "./religions";
import {Race, races} from "./races";
import {Occupation, occupations} from "./occupations";
import {age_groups, AgeGroup} from "./age-groups";
import {Area, areas} from "./areas";

export interface PopInfo {
    area: Area;
    religion: Religion;
    race: Race;
    occupation: Occupation;
    ageGroup: AgeGroup;
    gender: string;
    quantity: number;
}

export const demographics = pops.map((value): PopInfo => {
    const {religion_id, race_id, occupation_id, age_group_id, female, quantity, area_id} = value;

    return {
        area: areas.find(area_id),
        religion: religions.find(religion_id),
        race: races.find(race_id),
        occupation: occupations.find(occupation_id),
        ageGroup: age_groups.find(age_group_id),
        gender: female ? "female" : "male",
        quantity: quantity,
    }
})
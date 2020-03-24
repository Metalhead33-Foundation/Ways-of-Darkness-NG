import React from "react"

function ageDivision(real_age, divisor) {
    if(real_age < 18) {
        return real_age;
    } else {
        return (real_age-18)/divisor + 18;
    }
}

function ageMultiply(real_age) {
    if(real_age < 18) {
        return real_age;
    }  else {
        return (real_age - 18) * (8.5 * Math.pow(1.0474757339,((real_age - 18)/18))) + 18;
    }
}

interface AgeCalculations {
    [id: string]: (input: number) => number;
}

const age_calculation : AgeCalculations = {
    "elf": (input: number) => ageDivision(input, 10),
    "half_elf": (input: number) => ageDivision(input, 5),
    "orc": (input: number) => ageDivision(input, 2.93548),
    "half_orc": (input: number) => ageDivision(input, 1.46774),
    "lizardman": (input: number) => ageDivision(input, 14.22581),
    "halfling": (input: number) => ageDivision(input, 2.12903),
    "gnome": (input: number) => ageDivision(input, 5.65278),
    "limjiang": (input: number) => ageDivision(input, 1.83838),
    "azisiri": (input: number) => ageDivision(input, 2.7647058823529),
}

function format_age(format: string, birth: number, now: number) {
    let final_rounding_flag = false;

    if (format.endsWith("*")) {
        format = format.substr(0,format.length-1);
        final_rounding_flag = true;
    }

    if (format.endsWith("_true")) {
        format = format.substr(0, format.length-5);
        now = Math.floor(now * 365.25 / 376.0);
        birth = Math.floor(birth * 365.25 / 376.0);
    } else if(format.endsWith("true")) {
        now = Math.floor(now * 365.25 / 376.0);
        birth = Math.floor(birth * 365.25 / 376.0);
    } else {
        now = Math.floor(now);
        birth = Math.floor(birth);
    }

    const calculator = age_calculation[format];

    console.log("Warn, calculator not found for ", format)

    const years = calculator !== undefined?calculator(now-birth):(now-birth);

    return final_rounding_flag?Math.floor(years):years;
}

function Age({format,birth,now}) {
    return <span>{format_age(format, birth, now)}</span>
}

export default Age
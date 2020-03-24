import {Link} from "gatsby";
import React from "react";

interface LanguageInfo {
    font: string
    name: string | undefined
    name_hu: string | undefined
}

interface LanguageCode {
    [id: string]: LanguageInfo
}

function ln(font: string, name?: string, name_hu?: string): LanguageInfo {
    return {font, name, name_hu};
}

const font_code: LanguageCode = {
    "EHE": ln("Early High Elven"),
    "EHE0": ln("Early High Elven", "Early High Elven alphabet", "Korai nemeself ábécé"),
    "HE": ln("High Elven"),
    "HE1": ln("High Elven", "Classical High Elven alphabet", "Nemeself ábécé#Klasszikus nemeself"),
    "HE2": ln("High Elven", "Middle High Elven alphabet", "Nemeself ábécé#Középnemeself"),
    "HE3": ln("High Elven", "High Elven alphabet (contemporary)", "Nemeself ábécé#Nemeself"),
    "MET": ln("High Elven", "Middle Etrandish alphabet", "Nemeself ábécé#Középetrandi"),
    "ET": ln("High Elven", "Etrandish alphabet", "Nemeself ábécé#Etrandi"),
    "ETR": ln("High Elven", "Etrancoasti alphabet", "Nemeself ábécé#Etrancoasti"),
    "WEA": ln("High Elven", "Artaburran alphabet", "Nemeself ábécé#Erdőelf (Artaburro)"),
    "DELF": ln("High Elven", "Dark Elven alphabet", "Nemeself ábécé#Sötételf"),
    "WE": ln("Wood Elven", "Wood Elven cuneiforms", "Erdőelf ékírás"),
    "WE0": ln("Wood Elven"),
    "WE2": ln("Wood Elven", "Wood Elven cuneiforms#Archaic Wood Elven", "Erdőelf ékírás#Óerdőelf"),
    "WE3": ln("Wood Elven", "Wood Elven cuneiforms#Classical Wood Elven", "Erdőelf ékírás#Óerdőelf"),
    "WE4": ln("Wood Elven", "Wood Elven cuneiforms#Wood Elven (Dragoc)", "Erdőelf ékírás#Erdőelf (Dragoc)"),
    "HmnRns": ln("Human Runes"),
    "PRT": ln("Human Runes", "Human Runes#Proto-Human", "Emberi rúnák#Óemberi"),
    "OET": ln("Human Runes", "Human Runes#Old Etrandish", "Emberi rúnák#Óetrandi"),
    "OERT": ln("Human Runes", "Human Runes#Old Hulran", "Emberi rúnák#Óhulrai"),
    "LERT": ln("Human Runes", "Human Runes#Late Hulran", "Emberi rúnák#Késő-Hulrai"),
    "ODW0": ln("Dwarven"),
    "ODW": ln("Dwarven", "Dwarven script (alphabet family)", "Ótörp ábécé család"),
    "TOL": ln("Tolianem", "Tolianem script", "Tolianem ábécé"),
    "TOL0": ln("Tolianem"),
    "GAB0": ln("Gabyrian"),
    "GAB": ln("Gabyrian", "Gabyrian alphabet", "Gabyri ábécé")
};

function Fontize({code, children}) {
    const {font, name} = font_code[code];

    const txt = name ? <Link to={name}>{children}</Link> : children

    return (
        <span style={{fontFamily: font}}>
            {txt}
        </span>
    )
}

export default Fontize
import React from "react";
import {Link} from "gatsby";
import Fontize from "./fontize";

interface VariantInfo {
    article: string
    language: string
    id: string
    language_hu: string
}

interface LanguageInfo extends VariantInfo {
    variants: VariantInfo[]
}

interface LanguageCode {
    [id: string]: LanguageInfo,
}

function lv(article, language, id, language_hu) { return {article, language, id, language_hu} }

function ln(article, language, id, language_hu, variants = []) { return {article, language, id, language_hu, variants}}

const lang_code: LanguageCode = {
    "Early High Elven": ln("Archaic High Elven language", "Archaic High Elven", "EHE0", "Ónemeselfül"),
    "Archaic High Elven": ln("Archaic High Elven language", "Archaic High Elven", "EHE0", "Ónemeselfül"),
    "Classical High Elven": ln("Classical High Elven language", "Classical High Elven", "HE1", "Klasszikus Nemeselfül"),
    "Middle High Elven": ln("Middle High Elven language", "Middle High Elven", "HE2", "Középemeselfül"),
    "High Elven": ln("High Elven language", "High Elven", "HE3", "Nemeselfül"),
    "Proto-Human": ln("Proto-Human language", "Proto-Human", "PRT", "Óemberiül"),
    "Old Etrandish": ln("Old Etrandish", "Old Etrandish", "OET", "Óetrandiul"),
    "Middle Etrandish": ln("Middle Etrandish", "Middle Etrandish", "MET", "Középetrandiul"),
    "Etrandish": ln("Etrandish language", "Etrandish", "ET", "Etrandiul"),
    "Keldorni Etrandish": ln("Keldorni Etrandish", "Keldorni Etrandish", "ET", "Keldorni Etrandiul"),
    "Classical Hulran": ln("Old Hulran", "Old Hulran", "OERT", "Óhulraiul"),
    "Old Hulran": ln("Old Hulran", "Old Hulran", "OERT", "Óhulraiul"),
    "Late Hulran": ln("Late Hulran language", "Late Hulran", "LERT", "Késő-hulraiul"),
    "Etrancoasti": ln("Etrancoasti language", "Etrancoasti", "ET", "Etrancoastiul"),
    "Archaic Wood Elven": ln("Archaic Wood Elven language", "Archaic Wood Elven", "TOL", "Óerdőelfül"),
    "Classical Wood Elven": ln("Classical Wood Elven language", "Classical Wood Elven", "TOL", "Klasszikus Erdőelfül"),
    "Wood Elven Dragoc": ln("Wood Elven language", "Wood Elven", "TOL", "Erdőelfül"),
    "Wood Elven Artaburro": ln("Wood Elven language", "Wood Elven", "WEA", "Erdőelfül"),
    "Wood Elven": ln("Wood Elven language", "Wood Elven", "TOL", "Erdőelfül",[
        lv("Dragoc", "Dragoc", "TOL", "Erdőelfül"),
        lv("Artaburro", "Artaburro", "WEA", "Erdőelfül"),
    ]),
    "Dark Elven": ln("Dark Elven language", "Dark Elven", "DELF", "Sötételfül"),
    "Gabyrian": ln("Gabyrian language", "Gabyrian", "GAB", "Gabyriul"),
    "Old Dwarven": ln("Old Dwarven language", "Old Dwarven", "ODW", "Ótörpül"),
    "Classical Dwarven": ln("Old Dwarven language", "Classical Dwarven", "ODW", "Középtörpül"),
    "Dwarven": ln("Dwarven Koiné", "Dwarven", "ODW", "Törpül"),
};

function linquize(lang: string, txt: string[], ipa: string, txt2: string, snd: string, loc_txt: string, loc_snd: string) {
    const {article, language, id, variants,language_hu} = lang_code[lang];

    const scripts = (variants.length ? variants : [{article,language,id,language_hu}]).map(({article, language}, idx) => {
        return <><Link to={article}>{language}</Link>: <Fontize code={id}>{txt[idx]}</Fontize>; </>
    });

    const ipaLink = (<Link to={snd || article}>
            <span title="Representation in the International Phonetic Alphabet (IPA)" className="IPA" style={{fontFamily: "DoulosSIL"}}>
                {ipa}
            </span>
        </Link>
    )

    const sound = snd !== undefined?<>; <span className="flagicon"><Link to={snd}>sound</Link></span></>:'';

    return (<span>
            {scripts}<small>IPA:</small> {ipaLink}{sound}
        </span>
        )
}

interface MainArg {
    lang: string;
    txt: string|string[];
    ipa: string;
    txt2: string;
    snd: string|undefined;
    loc_txt: string|undefined;
    loc_snd: string|undefined;
}

function main({lang, txt, ipa, txt2, snd, loc_txt, loc_snd}: MainArg) {
    return linquize(lang, typeof(txt) == "string"?[txt]:txt, ipa, txt2, snd, loc_txt, loc_snd)
}

function IPA2(args) {
    return main(args)
}

export default IPA2
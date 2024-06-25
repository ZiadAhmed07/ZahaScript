
import en from "./en.json"
import ar from "./ar.json"


const translations = {
    en,
    ar
}


export default function t(key, locale = "ar") {
    return translations[locale][key] || key;
}

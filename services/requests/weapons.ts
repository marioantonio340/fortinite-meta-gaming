import i18n from "../../i18n/i18n";
import api from "../api";

export async function getAllWeapons() {
    const Url  = getUrl()
    console.log(i18n.language)
    console.log(Url)
    try {
        const result = await api.get(`${Url}`);
        const filteredWeapons = result.data.weapons.filter((weapon) => weapon.enabled);
        return filteredWeapons;
    }
    catch (error) {
        console.log(error)
        return {}
    }
}

const getUrl = () => {
    if (i18n.language === "pt") {
        return "/v1/loot/list?lang=Pt-BR"
    }
    else {
        return "/v1/loot/list?lang=En-US"
    }
}

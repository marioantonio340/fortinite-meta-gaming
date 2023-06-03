import api from "../api";

export async function getAllWeapons() {
    try {
        const result = await api.get("/v1/loot/list?lang=Pt-BR");
        return result.data;
    }
    catch (error) {
        console.log(error)
        return {}
    }
}
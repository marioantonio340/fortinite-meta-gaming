import React, {  useEffect, useState } from "react";
import i18n from "../../../i18n/i18n";
import { Alert } from "react-native";
import { getAllWeapons } from "../../../services/requests/weapons";
import {WeaponsContext} from "./WeaponsContext";

export default function WeaponsProvider({children}) {
    const [weapons, setWeapons] = useState([]);



    const lightBulletsWeapons = [];
    const shellWeapons = [];
    const mediumBulletsWeapons = [];
    const heavyBulletsWeapons = [];
    const otherWeapons = [];



    async function getWeapons() {
        try {
            
            const result = await getAllWeapons();
            if (result) {
                setWeapons(result);
            } else {
                Alert.alert('Arma nao encontrada');
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Erro ao buscar armas');
        } finally {

        }
    }


    useEffect(() => {
        getWeapons();
    }, [i18n.language]);





    weapons.forEach((weapon) => {
        if (weapon.gameplayTags.some(tag => /assault/i.test(tag))){
            mediumBulletsWeapons.push(weapon);
        }
        else if (weapon.gameplayTags.some(tag => /smg|pistol/i.test(tag))){
            lightBulletsWeapons.push(weapon);
        } else if (weapon.gameplayTags.some(tag => /shotgun/i.test(tag))){
            shellWeapons.push(weapon);
        } else if (weapon.gameplayTags.some(tag => /sniper/i.test(tag))){
            heavyBulletsWeapons.push(weapon);
        } else {
            otherWeapons.push(weapon);
        }
    });


    return (
        <WeaponsContext.Provider value={{
            lightBulletsWeapons : lightBulletsWeapons,
            shellWeapons : shellWeapons,
            mediumBulletsWeapons : mediumBulletsWeapons,
            heavyBulletsWeapons : heavyBulletsWeapons,
            otherWeapons : otherWeapons
        }}>
            {children}
        </WeaponsContext.Provider>
    );
}
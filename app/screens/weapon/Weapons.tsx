import React, { useContext } from "react";
import {  FlatList } from "react-native";
import  {WeaponsContext}  from "../../contexts/weapons/WeaponsContext";
import  {Weapon}  from "./card/Weapon";
export const Weapons = (params: any) => {

    const item: any = useContext(WeaponsContext); 

    const calculateDps = (weapon: any) => {
        return weapon.mainStats.DmgPB * weapon.mainStats.FiringRate;
      };
      const sortWeapons = (a: any, b: any) => {
        // Compara o DPS de cada arma
        const dpsA = calculateDps(a);
        const dpsB = calculateDps(b);
        if (dpsA < dpsB) {
          return 1;
        }
        if (dpsA > dpsB) {
          return -1;
        }
        return 0;
      };
    return (
         <FlatList 
         data={item[params.route.name].sort(sortWeapons)} 
         renderItem={
             ({ item }) => (
                 <Weapon weapon={item} />
             )
         }
         />
    )
    
}


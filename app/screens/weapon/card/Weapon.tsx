import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import * as S from "./styles";
import { useTranslation } from "react-i18next";
export const Weapon = ({ weapon }) => {
    const {t, i18n} = useTranslation();

    const calculateDps = (weapon: any) => {
        const result:any = weapon.mainStats.DmgPB * weapon.mainStats.FiringRate;
        return parseInt(result);
    }

    const isHealingItem = weapon.gameplayTags.includes("Trait.Restoration.Health") || weapon.gameplayTags.includes("Trait.Restoration.Shields");
    const dps = calculateDps(weapon);
    return (
        <S.Card>
            <S.Image source={{ uri: weapon.images.background }} />
            <S.Details>
                <S.Name>{weapon.name}</S.Name>
                <S.Description>{weapon.description}</S.Description>
                {isHealingItem && dps > 0 && (
                <S.Cure>{ t('cure') + ' : ' + weapon.mainStats.DmgPB}</S.Cure>
                )}
                {!isHealingItem && dps > 0 && (
                <S.Dps>{ t('dps') + ' : ' + dps}</S.Dps>
                )}
            </S.Details>
        </S.Card>
    );
}



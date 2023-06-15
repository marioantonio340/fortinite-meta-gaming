import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Linking } from "react-native";
import { useState } from "react";

import '../../../i18n/i18n';
import { useTranslation } from "react-i18next";

import DropDownPicker from "react-native-dropdown-picker";

import * as S from "./styles";

export const AboutScreen = () => {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [items, setItems] = useState([
        { label: 'Português - Brasil', value: 'pt' },
        { label: 'English - USA', value: 'en' }
    ]);

    const changeLanguage = (value: string) => {
        i18n.changeLanguage(value)
            .then(() => {
                console.log('changed language');
            })


    }

    const handleAdClick = () => {
        // Lógica para exibir o anúncio e apoiá-lo
    }

    return <S.Container>
        <View>
        <S.Name>{t('language')}</S.Name>
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setValue={setValue}
            setOpen={setOpen}
            setItems={setItems}
            placeholder={t('choose-option')}
            onChangeValue={(value) => {
                changeLanguage(value)
            }}
            style={S.styles.dropdown}
            textStyle={S.styles.dropdownText}
            containerStyle={S.styles.container}
        />
        </View>
        <S.Card>
            <S.Name >{t('created')} Mário Fernandes</S.Name>
            <S.GithubButton onPress={() => Linking.openURL('https://github.com/marioantonio340')}>
                <S.GithubIcon />
                <S.GithubButtonText>{t('github')}</S.GithubButtonText>
            </S.GithubButton>
            <S.Button onPress={handleAdClick}>
                <S.AdIcon />
                <S.ButtonText>{t('ad')}</S.ButtonText>
            </S.Button>
        </S.Card>

    </S.Container>
}

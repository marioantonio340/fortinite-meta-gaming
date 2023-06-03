import React from "react";
import { StyleSheet } from "react-native";
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

    return <S.Container>
        <S.Title>{t('hello')}</S.Title>
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
            style={styles.dropdown}
            textStyle={styles.dropdownText}
        />

    </S.Container>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
    },
    dropdown: {
        width: 200,
        height: 40,
        backgroundColor: '#fafafa',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    dropdownText: {
        textTransform: 'uppercase',
        fontSize: 16,
        color: '#333',
        fontFamily: 'Burbank', // Altere aqui o nome da fonte que deseja usar
    },
});
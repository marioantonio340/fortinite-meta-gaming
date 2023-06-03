import React from "react";
import {  ScrollView, Text,View } from "react-native";
import { Weapon } from "../weapon/weapon";

import * as S from "./styles";

export const HomeScreen = () => {
    return <ScrollView>
            <Weapon />
        </ScrollView>  
}
import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { ActivityIndicator, Alert, FlatList, SafeAreaView, ScrollView, Text, View } from "react-native";
import  WeaponsProvider  from "../../contexts/weapons/WeaponsProvider";

import { TopRoutes } from "../../routes/top/TopRoutes";




export const HomeScreen = () => {
   

    return <WeaponsProvider>
             <TopRoutes/>
    </WeaponsProvider>





}
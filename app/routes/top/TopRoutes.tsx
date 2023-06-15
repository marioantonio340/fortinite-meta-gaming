import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Weapons } from '../../screens/weapon/Weapons';
import React from 'react';
import { LightIcon } from '../../components/Light';
import { black } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';
import { pallete } from '../../theme/colors/fortnitepalete';
import { ShellIcon } from '../../components/Shell';
import { MediumIcon } from '../../components/Medium';
import { HeavyIcon } from '../../components/Heavy';
import { OtherIcon } from '../../components/Other';

const Tab = createMaterialTopTabNavigator();

export function TopRoutes() {

    return (

        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    fontFamily: 'Burbank',
                    fontSize: 14,
                    textTransform: 'uppercase',
                },
                tabBarStyle: {
                    backgroundColor: pallete.primary_100,
                    borderTopColor: pallete.primary_500,
                    justifyContent: 'center',
                    paddingBottom: 10,
                    paddingTop: 30,
                    marginBottom: 10
                },
                tabBarActiveTintColor: '#FFFFFF',
                tabBarInactiveTintColor: pallete.primary_300,
                animationEnabled:false,
                tabBarPressColor: pallete.primary_100,
                
                
                
            }}
        >
            <Tab.Screen
                name="lightBulletsWeapons"
                component={Weapons} 
                options={{ title: "light",
                tabBarIconStyle: {
                  borderColor: pallete.primary_500, 
                },

                tabBarIcon: () => (
                    <LightIcon />
                ),}}          
            />
            <Tab.Screen
                name="shellWeapons"
                component={Weapons}
                options={{ title: "shell",
                tabBarIconStyle: {
                    borderColor: pallete.primary_500, 
                  },
  
                  tabBarIcon: () => (
                      <ShellIcon  />
                  ), }}
            />
            <Tab.Screen
                name="mediumBulletsWeapons"
                component={Weapons}
                options={{ title: "medium",
                tabBarIconStyle: {
                    borderColor: pallete.primary_500, 
                  },
  
                  tabBarIcon: () => (
                      <MediumIcon  />
                  ), }}
            />
            <Tab.Screen
                name="heavyBulletsWeapons"
                component={Weapons}
                options={{ title: "heavy",
                tabBarIconStyle: {
                    borderColor: pallete.primary_500, 
                  },
  
                  tabBarIcon: () => (
                      <HeavyIcon  />
                  ), }}

            />
            <Tab.Screen
                name="otherWeapons"
                component={Weapons}
                options={{ title: "other",
                tabBarIconStyle: {
                    borderColor: pallete.primary_500, 
                  },
  
                  tabBarIcon: () => (
                      <OtherIcon  />
                  ), }}
            />
        </Tab.Navigator>
    );
}
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../screens/home/HomeScreen';
import { AboutScreen } from '../screens/about/AboutScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { StyleSheet } from 'react-native';

import { pallete  } from '../theme/colors/fortnitepalete';

import { useTranslation } from 'react-i18next';

import * as S from './styles';
import React from 'react';

const Tab = createBottomTabNavigator();

export const AppRoutes = () => {
  const { t, i18n } = useTranslation();

  return (
    <NavigationContainer>
      <Tab.Navigator
       screenOptions={{
        tabBarStyle: { 
          backgroundColor: pallete.primary_100,
          borderTopWidth: 1,
          borderTopColor: pallete.primary_500,
          height: 80,
          justifyContent: 'center',
          paddingBottom: 10,
          paddingTop: 10
        },
        tabBarActiveTintColor: pallete.primary_500,
        tabBarInactiveTintColor: pallete.primary_300
      }}
        >
      

        <Tab.Screen 
        name="HomeScreen"      
        component={HomeScreen}
        options={{
          tabBarLabel: t('weapons'),
          tabBarLabelStyle: {
            textTransform: 'uppercase',
            fontFamily: 'Burbank',
            fontSize: 22,

          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="pistol" color={color} size={32} />
          ),
          
          
          
        }}
        />
        <Tab.Screen 
        name="AboutScreen" 
        component={AboutScreen} 
        options={{
          tabBarLabel: t('about'),
          tabBarLabelStyle: {
            textTransform: 'uppercase',
            fontFamily: 'Burbank',
            fontSize: 22,

          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="dots-horizontal" color={color} size={32} />
          ),
        }}
      />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#191b28',
    borderTopWidth: 1,
    borderTopColor: '#121212',
    height: 60,
    justifyContent: 'center',
  },
  tabBarLabel: {
    fontFamily: 'Burbank',
    fontSize: 14,
    marginTop: 2,
  },
});
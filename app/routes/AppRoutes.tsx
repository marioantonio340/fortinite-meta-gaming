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
        headerShown: false,
        tabBarStyle: { 
          backgroundColor: pallete.primary_100,
          borderTopWidth: 1,
          borderTopColor: pallete.primary_500,
          height: 80,
          justifyContent: 'center',
          paddingBottom: 10,
          paddingTop: 10
        },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: pallete.primary_300,
        tabBarActiveBackgroundColor: 'transparent',
        tabBarLabelStyle: {
          fontFamily: 'Burbank',
          fontSize: 22,
          textTransform: 'uppercase',
        }
      }}
        >
      

        <Tab.Screen 
        name="HomeScreen"      
        component={HomeScreen}
        options={{
          tabBarLabel: t('weapons'),
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
  tabBar: {
    backgroundColor: '#333',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  tabLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedTab: {
    backgroundColor: '#4c4c4c',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
});
import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import  { HomeScreen } from './app/screens/home/index';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';



export default function App() {
  const [fontLoaded] =  useFonts({
    Burbank: require('./assets/fonts/BurbankBigCondensed-Black.otf'),
  });

  if (!fontLoaded) {
    return null;
  }



  return <SafeAreaView style={styles.container}>
      <HomeScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
})


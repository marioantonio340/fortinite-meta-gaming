import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text} from 'react-native';
import { AppRoutes } from './app/routes/AppRoutes';
import { useFonts } from 'expo-font';
import { useState } from 'react';



export default function App() {

  const [fontLoaded] =  useFonts({
    Burbank: require('./assets/fonts/BurbankBigCondensed-Black.otf'),
  });

  if (!fontLoaded) {
    return null;
  }

  return <SafeAreaView style={styles.container}>
      <AppRoutes />
      <StatusBar style="auto" />
    </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})


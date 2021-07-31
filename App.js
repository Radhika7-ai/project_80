import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from '../Home.js' ; 
import SpaceCraftScreens from '../SpaceCraft.js' ; 
import DailyPicScreens from '../DailyPics.js' ; 
import DailyPicScreens from '../StarMap.js' ; 


function App() {
  return(
    <NavigaionCointainer>
      <Stack.Navigator initalRouteName = 'Home'  screenOptions = {{
        headerShown: false 
      }}>
        <Stack.screen name = "Home" component = {HomeScreen} />
        <Stack.screen name = "SpaceCrafts" component = {SpaceCraftScreens} />
        <Stack.screen name = "DailyPics" component = {DailyPicScreens} />
        <Stack.screen name = "StarMaps" component = {StarMapsScreens } />
      </Stack.Navigator>
    </NavigaionCointainer>
  )
}
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

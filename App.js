import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import TransactionScreen from './screens/Aa';
import SearchScreen from './screens/Bb';
import SwimScreen from './screens/Cc';
import SleepScreen from './screens/Dd';

import AirplaneScreen from './screens/Ff';
import PrintScreen from './screens/Ee';


const Tab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();

export default class App extends React.Component {
  render(){
  return (
        <View style={styles.container}>
   
   
  
    <NavigationContainer>
      <Tab.Navigator options={{
          allowFontScaling : false
      }}>
        <Tab.Screen name="1" component={PrintScreen} />
        <Tab.Screen name="2" component={AirplaneScreen} />
        <Tab.Screen name="3" component={SearchScreen} />
        <Tab.Screen name="4" component={SwimScreen} />
        <Tab.Screen name="5" component={SleepScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
   </View>
    );
  }
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

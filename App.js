import * as React from 'react';
import { View, StyleSheet, Button,TextInput,Text,TouchableOpacity,Image } from 'react-native';
import Fb from './screens/Fb';
import In from './screens/In'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
export default class App extends React.Component {
render(){
  return(
   
    <AppContainer/>
    
  )
}
}
const tabNavigator=createBottomTabNavigator({
  Fb:{screen:Fb},
  In:{screen:In}
})
const AppContainer=createAppContainer(tabNavigator)

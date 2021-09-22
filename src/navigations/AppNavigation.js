
import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityComponent,
  useColorScheme,
  View,
  StackNavigator
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator }  from '@react-navigation/stack'
/**Elementos importados del Menu */
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import HomeScreen from '../screens/Home/HomeScreen';
import CoursesListScreen from '../screens/CourseList/CoursesListScreen';
import NewsScreen from '../screens/New/NewsScreen';
import EventsScreen from '../screens/Event/EventsScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MainNavigator() {
  return(
    <Stack.Navigator
      screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            flex: 1,
            backgroundColor: 'red',
          }
      }}
    >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='CoursesList' component={CoursesListScreen}/>
      <Stack.Screen name='News' component={NewsScreen}/>
      <Stack.Screen name='Events' component={EventsScreen} />
    </Stack.Navigator>
  )
}


function DrawerStack() {
  return(
    <Drawer.Navigator
      drawerPosition='center'
      initialRouteName='Main'
      drawerStyle={{
        width: 250,
        backgroundColor: 'yellow',
      }}
      drawerContent={props=> DrawerContainer}
    >
      <Drawer.Screen name='Main' component={MainNavigator} />
    </Drawer.Navigator>
  )
}


export default function AppContainer() {
  return(
    <NavigationContainer>
      <DrawerStack/>
    </NavigationContainer>
  )
}
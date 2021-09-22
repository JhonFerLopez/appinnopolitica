
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
import { createStackNavigator }  from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/**Elementos importados del Menu */
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import HomeScreen from '../screens/Home/HomeScreen';
import CoursesListScreen from '../screens/CourseList/CoursesListScreen';
import NewsScreen from '../screens/New/NewsScreen';
import EventsScreen from '../screens/Event/EventsScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

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
      initialRouteName='app'
      drawerStyle={{
        width: 250,
        backgroundColor: 'yellow',
      }}
      drawerContent={props=> DrawerContainer}
    >
      <Drawer.Screen name="Home" component={MyTabs}  options={{headerShown: false, hidden: true}}/>
      <Drawer.Screen name='app' component={MainNavigator} options={{headerShown: false, hidden: true}}/>      
    </Drawer.Navigator>
  )
}

function MyTabs() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Inicio" component={HomeScreen} />
      <Tabs.Screen name="Cursos" component={CoursesListScreen} />
      <Tabs.Screen name="Clases en Vivo" component={NewsScreen} />
      <Tabs.Screen name="Videos" component={EventsScreen} />
    </Tabs.Navigator>
  );
}


export default function AppContainer() {
  return(
    <NavigationContainer>
      <DrawerStack/>
    </NavigationContainer>
  )
}
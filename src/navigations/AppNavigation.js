
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
  Image,
  Linking,
  StackNavigator
} from 'react-native';
import styles from './styles';
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
const Tab = createBottomTabNavigator();
const navOptionHandler = () => ({
  headerShown: false
})

/** */
const MainNavigator = () => ( 
  <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name='Home' component={HomeScreen} options={ navOptionHandler }/>
    <Stack.Screen name='Curso Lista' component={CoursesListScreen} options={ navOptionHandler }/>
    <Stack.Screen name='Noticia Lista' component={NewsScreen} options={ navOptionHandler }/>
    <Stack.Screen name='Envento List' component={EventsScreen} options={ navOptionHandler }/>
  </Stack.Navigator>
);

CoursesWeb = item => {
  Linking.openURL('https://ziel.com.co/');
};
LiveClassesWeb = item => {
  Linking.openURL('https://ziel.com.co/');
};
VideoWeb = item => {
  Linking.openURL('https://ziel.com.co/');
};

const MyTabs = () => (
  <Tab.Navigator >
    <Tab.Screen name="Home" component={MainNavigator} />
    <Tab.Screen name="Cursos" component={CoursesWeb} />
    <Tab.Screen name="Clases en Vivo" component={LiveClassesWeb} />
    <Tab.Screen name="Videos" component={VideoWeb} />
  </Tab.Navigator>
);

const DrawerStack = () => (
  <Drawer.Navigator
    initialRouteName='Home'
    drawerContent={ props => DrawerContainer }
  >
    <Drawer.Screen name='Home' component={ MyTabs } options={ navOptionHandler } />    
  </Drawer.Navigator>
);

export default function AppContainer() {
  return(
    <NavigationContainer>
      <DrawerStack/>
    </NavigationContainer>
  )
}

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
import Ionicons from 'react-native-vector-icons/Ionicons';

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

CoursesWeb = () => {
  Linking.openURL('https://ziel.com.co/');
};
LiveClassesWeb = () => {
  Linking.openURL('https://ziel.com.co/');
};
VideoWeb = () => {
  Linking.openURL('https://ziel.com.co/');
};

const MyTabs = () => (
  <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? require('./../../assets/icons/iconInicioTopActive.png')
              : require('./../../assets/icons/iconInicioTop.png');
          } else if (route.name === 'Cursos') {
            iconName = require('./../../assets/icons/iconCursosTop.png');
          } else if (route.name === 'Clases en Vivo') {
            iconName = require('./../../assets/icons/iconClasesTop.png');
          } else if (route.name === 'Videos') {
            iconName = require('./../../assets/icons/iconVideoTop.png');
          }
          // You can return any component that you like here!
          return <Image source={iconName} style={{ height : 30, width: 30}} 
          resizeMode="contain"/>
        },
      })}
      tabBarOptions={{ 
        activeTintColor: '#FFDF73',
        inactiveTintColor: '#19265D'
      }}
    >
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
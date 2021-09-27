
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
import Course from '../screens/Course/CoursesScreen';
import NewsListScreen from '../screens/NewList/NewListScreen';
import NewsScreen from '../screens/New/NewsScreen';
import EventsListScreen from '../screens/EventsList/EventsListScreen';
import EventsScreen from '../screens/Event/EventsScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const navOptionHandler = () => ({
  headerShown: false
})

/** */
const MainNavigator = () => ( 
  <Stack.Navigator initialRouteName='Home' screenOptions={{
    headerStyle: { elevation: 0 },
    cardStyle: { backgroundColor: '#fff' }
}}>
    <Stack.Screen name='Home' component={HomeScreen} options={ navOptionHandler }/>
    <Stack.Screen name='Curso Lista' component={CoursesListScreen} options={ navOptionHandler }/>
    <Stack.Screen name='Curso' component={Course} options={ navOptionHandler }/>
    <Stack.Screen name='Noticia Lista' component={NewsListScreen} options={ navOptionHandler }/>
    <Stack.Screen name='Noticia' component={NewsScreen} options={ navOptionHandler }/>
    <Stack.Screen name='Evento Lista' component={EventsListScreen} options={ navOptionHandler }/>
    <Stack.Screen name='Evento' component={EventsScreen} options={ navOptionHandler }/>
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

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={ styles.tabView } >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        let iconName ='';
        if (route.name === 'Home') {
          iconName = isFocused
            ? require('./../../assets/icons/iconInicioTopActive.png')
            : require('./../../assets/icons/iconInicioTop.png');
        } else if (route.name === 'Cursos') {
          iconName = require('./../../assets/icons/iconCursosTop.png');
        } else if (route.name === 'Clases en Vivo') {
          iconName = require('./../../assets/icons/iconClasesTop.png');
        } else if (route.name === 'Videos') {
          iconName = require('./../../assets/icons/iconVideoTop.png');
        }
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={ styles.tabTouch }
          >
            <Image source={iconName} style={ styles.tabImage } 
              resizeMode="contain"/>
            <Text style={{ fontSize: 100, color: isFocused ? '#673ab7' : '#222' }+styles.tabText}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const MyTabs = () => (
  <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />} >
    <Tab.Screen name="Home" component={MainNavigator} style={styles.tabText}/>
    <Tab.Screen name="Cursos" component={CoursesWeb} style={styles.tabText}/>
    <Tab.Screen name="Clases en Vivo" component={LiveClassesWeb} style={styles.tabText}/>
    <Tab.Screen name="Videos" component={VideoWeb} style={styles.tabText} />
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

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
  View
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator }  from '@react-navigation/stack'
/**Elementos importados del Menu */
import HomeScreen from '../screens/Home/HomeScreen';
import CoursesScreen from '../screens/Course/CoursesScreen';
import NewsScreen from '../screens/New/NewsScreen';
import EventsScreen from '../screens/Event/EventsScreen';


function PerfilScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:20}}>Perfil Screen</Text>
      </View>
    );
}

const Drawer = createDrawerNavigator();

function OnboardingStack() {
  return (
    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Cursos" component={CoursesScreen} />
            <Drawer.Screen name="Noticias" component={NewsScreen} />
            <Drawer.Screen name="Eventos" component={EventsScreen} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default OnboardingStack;



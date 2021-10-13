
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
  StackNavigator, 
  Dimensions
} from 'react-native';
import styles from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator }  from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MenuImage from '../../components/MenuImage/MenuImage';

/**Elementos importados del Menu */
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import HomeScreen from '../screens/Home/HomeScreen';
import CoursesListScreen from '../screens/CourseList/CoursesListScreen';
import Course from '../screens/Course/CoursesScreen';
import NewsListScreen from '../screens/NewList/NewListScreen';
import NewsScreen from '../screens/New/NewsScreen';
import EventsListScreen from '../screens/EventsList/EventsListScreen';
import EventsScreen from '../screens/Event/EventsScreen';
import ContactScreen from '../screens/Contact/ContactScreen';

export default class AppContainer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      link_cursos: '',
      link_clase_en_vivo: '',
      link_videos:'',
      url: 'https://app-innopolitica.com.co/wp-json/config-home/v2/home/'
    }
  }  
  componentDidMount(){
    this.getMenu();
  }
  getMenu = () => {
    fetch(this.state.url)
    .then( res => res.json() )
    .then( res => {
      this.setState({
        link_cursos: res.link_cursos,
        link_clase_en_vivo: res.link_clase_en_vivo,
        link_videos: res.link_videos,
        loading: true
      })
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    const { width } = Dimensions.get("screen");

    const Stack = createStackNavigator();
    const Drawer = createDrawerNavigator();
    const Tab = createBottomTabNavigator();
    const navOptionHandler = () => ({
      headerShown: false
    })

    /** */
    const MainNavigator = () => ( 
      <Stack.Navigator initialRouteName='Home' 
        screenOptions={({ navigation }) => ({
          headerLeft: () => <MenuImage onPress={() => {
            navigation.openDrawer();
          }} />,
          presentation: 'modal',
          headerStyle: { width: '100%',elevation: 0,alignContent: 'center' },
          cardStyle: { backgroundColor: '#fff' },
          headerTitleStyle: {
            width: '100%',
            textAlignVertical: 'center',
            fontWeight: '600',
            textAlign: 'center',
            alignSelf: 'center',
            flex: 1,
          }
        })}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Curso Lista' component={CoursesListScreen} />
        <Stack.Screen name='Curso' component={Course}/>
        <Stack.Screen name='Noticia Lista' component={NewsListScreen}/>
        <Stack.Screen name='Noticia' component={NewsScreen}/>
        <Stack.Screen name='Evento Lista' component={EventsListScreen}/>
        <Stack.Screen name='Evento' component={EventsScreen}/>
        <Stack.Screen name='Contactenos' component={ContactScreen}/>
      </Stack.Navigator>
    );

    CoursesWeb = () => {
      Linking.openURL(this.state.link_cursos);
    };
    LiveClassesWeb = () => {
      Linking.openURL(this.state.link_clase_en_vivo);
    };
    VideoWeb = () => {
      Linking.openURL(this.state.link_videos);
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
        <Tab.Screen name="Home" component={MainNavigator} style={styles.tabText} options={ navOptionHandler }/>
        <Tab.Screen name="Cursos" component={CoursesWeb} style={styles.tabText}/>
        <Tab.Screen name="Clases en Vivo" component={LiveClassesWeb} style={styles.tabText}/>
        <Tab.Screen name="Videos" component={VideoWeb} style={styles.tabText} />
      </Tab.Navigator>
    );

    const DrawerStack = () => (
      <Drawer.Navigator
        initialRouteName='Home'
        drawerContent={(props) => <DrawerContainer {...props} />} 
      >
        <Drawer.Screen name='Homer' component={ MyTabs } options={ navOptionHandler }/> 
      </Drawer.Navigator>
    );
    if(this.state.loading){
      return(
        <NavigationContainer>
          <DrawerStack/>
        </NavigationContainer>
      )
    }else{
      return(
        <View style={styles.presentacion}>
          <Image style={styles.fontPhoto} source={require('./../../assets/icons/fondoPresentacion.png')} />
          <Image style={styles.logoPhoto} source={require('./../../assets/icons/innopoliticaLogo.png')} />
        </View>
      )
    }    
  }
}
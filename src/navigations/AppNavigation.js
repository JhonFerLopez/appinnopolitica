
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
    const { navigation } = this.props;
    this.state = {
      loading: false,
      link_cursos: '',
      link_clase: '',
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
        link_clase: res.link_clase_en_vivo,
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

    if(this.state.loading){
      /** */
      const MainNavigator = () => ( 
        <Stack.Navigator initialRouteName='Home' 
          screenOptions={({ navigation }) => ({
            headerLeft: () => <MenuImage onPress={() => {
              navigation.openDrawer();
            }} />,
            headerStyle: { width: '100%',elevation: 0,alignContent: 'center',height: 70 },
            title: <Image style={{ width: 260, height: 32 }} 
              source={{ uri: 'https://app-innopolitica.com.co/wp-content/uploads/2021/10/innopoliticaLogo.png' }}
              resizeMode='contain'/>,             
            headerTitleStyle: {
              width: '100%',
              top: 10,
              flex: 1,
            },
            presentation: 'modal',
            cardStyle: { backgroundColor: '#fff'},
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
      const ImageHeader = props => (
        <View style={{ backgroundColor: '#eee' }}>
          <Image
            style={StyleSheet.absoluteFill}
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg' }}
          />
          <Header {...props} style={{ backgroundColor: 'transparent' }}/>
        </View>
      );

      CoursesWeb = () => {
        Linking.openURL(this.state.link_cursos);
        //Linking.openURL('https://ziel.com.co/');
      };
      LiveClassesWeb = () => {
        Linking.openURL(this.state.link_clase);
        //Linking.openURL('https://ziel.com.co/');
      };
      VideoWeb = () => {
        Linking.openURL(this.state.link_videos);
        //Linking.openURL('https://ziel.com.co/');
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
          <Drawer.Screen name='Home' component={ MyTabs } options={ navOptionHandler }/> 
        </Drawer.Navigator>
      );
      return(
        <NavigationContainer>
          <DrawerStack/>
        </NavigationContainer>
      )
    }else{
      return (
        <View style={styles.presentacion}>
          <Image style={styles.fontPhoto} source={require('./../../assets/icons/fondoPresentacion.png')} />
          <Image style={styles.logoPhoto} source={require('./../../assets/icons/innopoliticaLogo.png')} />
        </View>
      )
    }    
  }
}
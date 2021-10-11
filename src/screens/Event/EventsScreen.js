import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight,
  Button,
  Linking,
  ScrollView
} from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { categories } from '../../data/dataArrays';
import { getNumberOfRecipes } from '../../data/MockDataAPI';

export default class EventsScreen extends React.Component {
  static navigationOptions = ({ route, navigation }) => {
    return {
      headerTransparent: 'true',
      headerLeft: () => <BackButton
        onPress={() => {
          navigation.goBack();
        }}
      />
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0
    };
  }

  onPressNewPageWeb = (item) => {
    Linking.openURL(item.link);
  };

  render() {
    const { route } = this.props;
    const { item } = route.params;

    const name = item.name;
    const photo_url = item.img;
    const fecha_inicio = item.fecha_inicio;
    const descrip = item.descrip;
   
    return (
      <View style={styles.newsItemContainer}>
        <ScrollView style={styles.newsItemContainerOne}>
          <Image style={styles.newsPhoto} source={{ uri: photo_url }  } />
          <Text style={styles.newsName}>{name}</Text>
          <Text style={styles.newsFecha}>Fecha: {fecha_inicio}</Text> 
          <Text style={styles.newsDescrip}>{descrip}</Text>                 
        </ScrollView>        
        <View style={styles.viewButton} >
          <TouchableOpacity style={styles.newsButton} onPress={() => this.onPressNewPageWeb(item)}>
            <Image style={styles.newsButtonPhoto} source={{ uri:item.icon}} />
            <Text style={styles.newsButtonTitle}>Ver más</Text>
          </TouchableOpacity> 
        </View>
      </View>        
    );
  }
}

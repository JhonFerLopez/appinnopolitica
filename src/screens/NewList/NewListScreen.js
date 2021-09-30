import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import { newsContent } from '../../data/dataArrays';
import { getNumberOfRecipes } from '../../data/MockDataAPI';

export default class NewListScreen extends React.Component {
  static navigationOptions = {
    title: 'Lista de Noticias'
  };

  constructor(props) {
    super(props);
  }

  onPressNews = item => {
    this.props.navigation.navigate('Noticia', { item });
  };

  renderNewsList = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.0)' onPress={() => this.onPressNews(item)}>
      <View style={styles.newlistItemContainer}>
        <View style={styles.newlistIcon}>
          <Text style={styles.newlistFecha}>{item.fecha_inicio}</Text>
          <Text style={styles.newlistFechaLetra}>{item.fecha_letra}</Text>
        </View>
        <Text style={styles.newlistName}>{item.name}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <FlatList          
          data={newsContent}
          renderItem={this.renderNewsList}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  }
}

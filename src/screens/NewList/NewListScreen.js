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
    const { navigation } = this.props;
    this.state = {
      noticias: [],
      url: 'https://app-innopolitica.com.co/wp-json/noticias/v2/noticia/'
    }
  }
  componentDidMount(){
    this.getNoticias();
  }

  getNoticias = () => {
    fetch(this.state.url)
    .then( res => res.json() )
    .then( res => {
      this.setState({
        noticias: res.result
      })
    })
    .catch((error) => {
      console.error(error);
    });
  }

  onPressNews = item => {
    this.props.navigation.navigate('Noticia', { item });
  };

  renderNewsList = ({ item }) => (
    <TouchableHighlight style={styles.newlistItemTouchable} underlayColor='rgba(73,182,77,0.0)' onPress={() => this.onPressNews(item)}>
      <View style={styles.newlistItemContainer}>
        <View style={styles.newlistIcon}>
          <Text style={styles.newlistFecha}>{item.dia}</Text>
          <Text style={styles.newlistFechaLetra}>{item.mes}</Text>
        </View>
        <Text style={styles.newlistName}>{item.name}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <FlatList          
          data={this.state.noticias}
          renderItem={this.renderNewsList}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  }
}

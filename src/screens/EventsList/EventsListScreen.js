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

export default class EventsListScreen extends React.Component {
  static navigationOptions = {
    title: 'Lista de Eventos'
  };

  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {
      eventos: [],
      url: 'https://app-innopolitica.com.co/wp-json/eventos/v2/evento/'
    }
  }

  componentDidMount(){
    this.getEventos();
  }

  getEventos = () => {
    fetch(this.state.url)
    .then( res => res.json() )
    .then( res => {
      this.setState({
        eventos: res.result
      })
    })
    .catch((error) => {
      console.error(error);
    });
  }

  onPressEvent = item => {
    this.props.navigation.navigate('Evento', { item });
  };

  renderNewsList = ({ item }) => (
    <TouchableHighlight style={styles.newlistItemTouchable} underlayColor='rgba(73,182,77,0.0)' onPress={() => this.onPressEvent(item)}>
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
          data={this.state.eventos}
          renderItem={this.renderNewsList}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  }
}

import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import MenuImage from '../../components/MenuImage/MenuImage';
import { coursesContent } from '../../data/dataArrays';
import { getNumberOfRecipes } from '../../data/MockDataAPI';

export default class CoursesListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Lista de Cursos'
    };
  };

  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {
      cursos: [],
      url: 'https://app-innopolitica.com.co/wp-json/cursos/v2/curso/'
    }
  }
  componentDidMount(){
    this.getCursos();
  }

  getCursos = () => {
    fetch(this.state.url)
    .then( res => res.json() )
    .then( res => {
      this.setState({
        cursos: res.result
      })
    })
    .catch((error) => {
      console.error(error);
    });
  }

  onPressCourses = item => {
    this.props.navigation.navigate('Curso', { item });
  };

  renderCoursesList = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.0)' onPress={() => this.onPressCourses(item)}>
      <View style={styles.courseslistItemContainer}>
        <Image style={styles.courseslistPhoto} source={{ uri: item.img }} resizeMode='contain' />
        <Text style={styles.courseslistName}>{item.name}</Text>
        <Text style={styles.courseslistFecha}>Fecha: {item.fecha_inicio}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View>
        <FlatList
          data={this.state.cursos}
          renderItem={this.renderCoursesList}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  }
}

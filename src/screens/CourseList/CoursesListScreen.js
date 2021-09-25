import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import { coursesContent } from '../../data/dataArrays';
import { getNumberOfRecipes } from '../../data/MockDataAPI';

export default class CoursesListScreen extends React.Component {
  static navigationOptions = {
    title: 'Lista de Cursos'
  };

  constructor(props) {
    super(props);
  }

  onPressCourses = item => {
    const title = item.name;
    const course = item;
    this.props.navigation.navigate('Curso', { course, title });
  };

  renderCoursesList = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => this.onPressCourses(item)}>
      <View style={styles.courseslistItemContainer}>
        <Image style={styles.courseslistPhoto} source={{ uri: item.photo_url }} />
        <Text style={styles.courseslistName}>{item.name}</Text>
        <Text style={styles.courseslistFecha}>Fecha: {item.fecha_inicio}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View>
        <FlatList
          data={coursesContent}
          renderItem={this.renderCoursesList}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  }
}

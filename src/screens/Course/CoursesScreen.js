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
import { coursesContent } from '../../data/dataArrays';
import { getCoursesByName } from '../../data/MockDataAPI';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class CoursesScreen extends React.Component {
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

  onPressCoursesPageWeb = (item) => {
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
      <View style={styles.coursesItemContainer}>
        <ScrollView style={styles.coursesItemContainerOne}>
          <Image style={styles.coursesPhoto} source={{ uri: photo_url }  } />
          <Text style={styles.coursesName}>{name}</Text>
          <Text style={styles.coursesDescrip}>{descrip}</Text>
          <Text style={styles.coursesFecha}>{fecha_inicio}</Text>        
        </ScrollView>        
        <View style={styles.viewButton} >
          <TouchableOpacity style={styles.coursesButton} onPress={() => this.onPressCoursesPageWeb(item)}>
            <Image style={styles.coursesButtonPhoto} source={{ uri:item.icon }} />
            <Text style={styles.coursesButtonTitle}>Ver Curso</Text>
          </TouchableOpacity> 
        </View>
      </View>        
    );
  }
}

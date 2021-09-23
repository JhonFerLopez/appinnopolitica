import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Linking
} from 'react-native';
import styles from './styles';
import { homeContent, homeSubContent, recipes } from '../../data/dataArrays';
import { getNumberOfRecipes, getCategoryName } from '../../data/MockDataAPI';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerLeft: () => <MenuImage
      onPress={() => {
        navigation.openDrawer();
      }}
    />
  });
  
  constructor(props) {
    super(props);
    const { navigation } = this.props;
  }

  onPressContent = item => {
    this.props.navigation.navigate('Curso Lista', { item });
  };

  onPressRecipe = item => {
    Linking.openURL('https://ziel.com.co/');
//    this.props.navigation.navigate('Recipe', { item });
  };

  renderContent = ({ item }) => (
    <TouchableHighlight onPress={() => this.onPressContent(item)}>
      <View style={styles.contentItemContainer}>
        <Text style={styles.contentName}>{item.name}</Text>
        <Image style={styles.contentIcon} source={{ uri: item.icon_url }} />
        <Image style={styles.contentPhoto} source={{ uri: item.photo_url }} />
      </View>
    </TouchableHighlight>
  );
  renderSubContent = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => this.onPressRecipe(item)}>
      <View style={styles.subContentItemContainer}>
        <View style={styles.ContainerSubPhoto}>
          <Image style={styles.subPhoto} source={{ uri: item.icon_url }} />
        </View>
        <Text style={styles.subTitle}>{item.name}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <ScrollView>
        <View>
          <FlatList
            data={homeContent}
            renderItem={this.renderContent}
            keyExtractor={item => `${item.id}`}
          />
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={homeSubContent}
            renderItem={this.renderSubContent}
            keyExtractor={item => `${item.recipeId}`}
          />
        </View>
      </ScrollView>
    );
  }
}

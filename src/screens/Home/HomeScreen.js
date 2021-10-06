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
import MenuImage from '../../components/MenuImage/MenuImage';
import { homeContent, homeSubContent, recipes } from '../../data/dataArrays';
import { getNumberOfRecipes, getCategoryName } from '../../data/MockDataAPI';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
      title: 'Home',
      headerTransparent: 'true',
      headerLeft: () => <MenuImage
      onPress={() => {
        navigation.openDrawer();
      }}
    />
  });
  
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {
      texto: 'hola',
      loading: false,
      pokemon: [],
      url: 'https://pokeapi.co/api/v2/pokemon/'
    }
  }

  componentDidMount(){
    this.getPokemon();
  }

  getPokemon = () => {
    this.setState({ loading:true });
    fetch(this.state.url)
    .then( res => res.json() )
    .then( res => {
      this.setState({
        pokemon: res.results,
        url: res.next,
        loading: false
      })
      this.setState({ texto: 'john' });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  onPressContent = item => {
    this.props.navigation.navigate(item.action, { item });
  };

  onPressRecipe = item => {
    Linking.openURL('https://ziel.com.co/');
//    this.props.navigation.navigate('Recipe', { item });
  };

  renderContent = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.0)' onPress={() => this.onPressContent(item)}>
      <View style={styles.contentItemContainer}>
        <Text style={styles.contentName}>{item.name}</Text>
        <Image style={styles.contentIcon} source={{ uri: item.icon_url }} />
        <Image style={styles.contentPhoto} source={{ uri: item.photo_url }} />
      </View>
    </TouchableHighlight>
  );
  renderSubContent = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.0)' onPress={() => this.onPressRecipe(item)}>
      <View style={styles.subContentItemContainer}>
        <View style={styles.ContainerSubPhoto}>
          <Image style={styles.subPhoto} source={{ uri: item.icon_url }} />
        </View>
        <Text style={styles.subTitle}>{item.name}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    if(this.state.loading){
      <View>
        <Text>Cargando</Text>
      </View>
    }
    console.log("-->>>> "+this.state.texto)
    console.log("--> consulta ")
    console.log(this.state.pokemon)
    console.log("--> fin consulta")
    return (
      <ScrollView>
        <View>
          <FlatList
            data={this.state.pokemon}
            renderItem={
              ({item}) => (<Text>{ item.name }</Text>)
            }
            keyExtractor={(item, index) => index.toString()}
          />
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

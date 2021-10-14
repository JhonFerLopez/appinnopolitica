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
      homePrincipal: [],
      homeSecundario: [],
      url: 'https://app-innopolitica.com.co/wp-json/config-home/v2/home/'
    }
  }

  componentDidMount(){
    this.getHome();
  }

  getHome = () => {
    fetch(this.state.url)
    .then( res => res.json() )
    .then( res => {
      this.setState({
        homePrincipal: res.contenido_principal,
        homeSecundario: res.contenido_secundario,
      })
    })
    .catch((error) => {
      console.error(error);
    });
  }

  onPressContent = item => {
    this.props.navigation.navigate(item.link, { item });
  };

  onPressSubContent = item => {
    if(item.action == 'app'){
      this.props.navigation.navigate(item.link, { item });
    }else{
      Linking.openURL(item.link);
    }
  };

  renderContent = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.0)' onPress={() => this.onPressContent(item)}>
      <View style={styles.contentItemContainer}>
        <Image style={styles.contentPhoto} source={{ uri: item.banner }} />
      </View>
    </TouchableHighlight>
  );
  renderSubContent = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.0)' onPress={() => this.onPressSubContent(item)}>
      <View style={styles.subContentItemContainer}>
        <View style={styles.ContainerSubPhoto}>
          <Image style={styles.subPhoto} source={{ uri: item.icon }} />
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
            data={this.state.homePrincipal}
            renderItem={this.renderContent}
            keyExtractor={item => `${item.id}`}
          />
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={this.state.homeSecundario}
            renderItem={this.renderSubContent}
            keyExtractor={item => `${item.id}`}
          />
        </View>
      </ScrollView>
    );
  }
}

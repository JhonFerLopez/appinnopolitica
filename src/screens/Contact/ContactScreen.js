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
import { WebView } from 'react-native-webview';

export default class NewsScreen extends React.Component {
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

  render() {   
    return (
      <WebView
        source={{
          uri: 'https://app-innopolitica.com.co/contactenos/'
        }}
        style={{ marginTop: 20 }}
      />       
    );
  }
}

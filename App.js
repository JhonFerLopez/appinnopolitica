/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityComponent,
  useColorScheme,
  View
} from 'react-native';
import { WebView } from 'react-native-webview';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ButtonCustom from './components/button';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter : 0,
    };

    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
  }

  handleUp() {
    const { counter:ct } = this.state;
    this.setState({ counter:ct + 1});
  }
  handleDown() {
    const { counter:ct } = this.state;
    this.setState({ counter:ct - 1});
  }

  render() {
    const { counter } = this.state;
    
    return (
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          
          <ButtonCustom action={this.handleDown} label="-"/>

          <View style={styles.counterContainer}>
            <Text style={styles.counterTxt}>{counter}</Text>
          </View>
         
          <ButtonCustom action={this.handleUp} label="+"/>          
        </View>  
      </View>
    );  
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
  },
  subcontainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  counterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterTxt: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default App;

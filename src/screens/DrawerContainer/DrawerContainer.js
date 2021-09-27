import React from 'react';
import { View,Text,Linking } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../../components/MenuButton/MenuButton';

export default class DrawerContainer extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.content}>
        <View style={styles.container}>
          <MenuButton
            title="Lista de Cursos"
            source={require('../../../assets/icons/iconCursosTop.png')}
            onPress={() => {
              navigation.navigate('Curso Lista');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Lista de Noticias"
            source={require('../../../assets/icons/iconCursosTop.png')}
            onPress={() => {
              navigation.navigate('Noticia Lista');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Lista de Eventos"
            source={require('../../../assets/icons/iconCursosTop.png')}
            onPress={() => {
              navigation.navigate('Evento Lista');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Pagina de Cursos"
            source={require('../../../assets/icons/iconCursosTop.png')}
            onPress={() => {Linking.openURL('https://ziel.com.co/');
            }}
          />
          <MenuButton
            title="Clases en Vivo"
            source={require('../../../assets/icons/iconCursosTop.png')}
            onPress={() => {Linking.openURL('https://ziel.com.co/');
            }}
          />
          <MenuButton
            title="Videos"
            source={require('../../../assets/icons/iconCursosTop.png')}
            onPress={() => {Linking.openURL('https://ziel.com.co/');
            }}
          />
        </View>
      </View>
    );
  }
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};

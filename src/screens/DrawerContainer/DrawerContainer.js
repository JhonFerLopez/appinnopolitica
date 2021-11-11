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
            title="Ver Cursos"
            source={require('../../../assets/icons/iconCursosTop.png')}
            onPress={() => {
              navigation.navigate('Curso Lista');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Ver Noticias"
            source={require('../../../assets/icons/Vector2blue.png')}
            onPress={() => {
              navigation.navigate('Noticia Lista');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Ver Eventos"
            source={require('../../../assets/icons/Vector3blue.png')}
            onPress={() => {
              navigation.navigate('Evento Lista');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Contáctenos"
            source={require('../../../assets/icons/contactenos.png')}
            onPress={() => {
              navigation.navigate('Contactenos');
              navigation.closeDrawer();
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

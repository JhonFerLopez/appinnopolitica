import { ImageBackground, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
console.log("--> "+width);
const MARGIN = 10;
const ALTO_IMAGEN = 229;
const ANCHO_IMAGEN = 370;
const NEW_ANCHO_IMAGEN = width - (MARGIN * 2);
const PHOTO_HEIGHT = (ALTO_IMAGEN * NEW_ANCHO_IMAGEN) / ANCHO_IMAGEN;
console.log("-->>> "+PHOTO_HEIGHT);

const styles = StyleSheet.create({
  courseslistItemContainer: {
    flex: 1,
    margin: MARGIN,
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    overflow: 'hidden',
    position: 'relative',
  },
  courseslistPhoto: {
    flex: 1,
    width: NEW_ANCHO_IMAGEN,
    height: PHOTO_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    //width: 370,
    //height: 229,
  },
  courseslistName: {
    width: '100%',
    marginTop: 8,
    marginLeft: 15,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#19265D',
  },
  courseslistFecha: {
    width: '100%',
    marginTop: 2,
    marginLeft: 15,
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#9aa0b8',
    fontFamily: 'Poppins',
  }
});

export default styles;

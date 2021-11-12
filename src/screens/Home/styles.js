import { StyleSheet, Dimensions } from 'react-native';

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 150;
const RECIPE_ITEM_MARGIN = 20;

const MARGIN = 15;
const ALTO_IMAGEN = 120;
const ANCHO_IMAGEN = 370;
const NEW_ANCHO_IMAGEN = width - (MARGIN * 2);
const PHOTO_HEIGHT = (ALTO_IMAGEN * NEW_ANCHO_IMAGEN) / ANCHO_IMAGEN;

const styles = StyleSheet.create({
  contentItemContainer: {
    //width: width ,
    flex: 1,
    marginBottom: 20,
    marginLeft: MARGIN,
    marginRight: MARGIN,
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    overflow: 'hidden',
    position: 'relative',
  },
  contentPhoto: {
    flex: 1,
    width: NEW_ANCHO_IMAGEN,
    height: PHOTO_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentName: {
    position: 'absolute',
    zIndex: 3,
    elevation: 3,
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
    left : 33,
    bottom: 20
  },
  contentIcon: {
    position: 'absolute',
    zIndex: 3,
    elevation: 3,
    flex: 1,
    width: 36,
    height: 40,
    left : 33,
    bottom: 60
  },
  //Style SubContent
  subContentItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: RECIPE_ITEM_MARGIN,
    marginTop: 10,
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT + 25,
    borderColor: '#19265D',
    borderWidth: 3.5,
    borderRadius: 30,   
  },
  ContainerSubPhoto: {
    width: '100%',
  },
  subPhoto: {
    width: 55,
    height: 55,
    shadowOpacity: 1.0,
    left : 15,
    top: 27
  },
  subTitle: {
    width: '100%',
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#19265D',
    marginTop: 40,
    marginRight: 5,
    marginLeft: 5,
    paddingLeft: 15,
    //borderWidth: 2,
    //borderColor: 'red',
  },
});

export default styles;

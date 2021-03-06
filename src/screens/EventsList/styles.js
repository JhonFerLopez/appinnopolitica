import { ImageBackground, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const MARGIN = 10;

const styles = StyleSheet.create({
  newlistItemTouchable: {
    width: width,
    marginBottom: MARGIN,
    paddingLeft: MARGIN,
    paddingRight: MARGIN,
  },
  newlistItemContainer: {
    width: width - (MARGIN *2),
    height: 80,
    flex: 1,
    //margin: 10,
    borderWidth: 3,
    borderColor: '#342274',
    borderRadius: 20,
    justifyContent: 'center',
  },
  newlistIcon: {
    width: 50,
    height: 50,
    marginTop: 14,
    marginLeft: 17,
    backgroundColor: '#19265D',
    borderRadius: 10,
    position: 'absolute',
  },
  newlistName: {
    width: '74%',
    marginLeft: 80,
    fontSize: 18,
    textAlign: 'left',
    justifyContent: 'center',
    color: '#19265D',
    fontWeight: '400',
    fontFamily: 'Poppins-Bold', 
  },
  newlistFecha: {
    width: '100%',
    height: '60%',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  newlistFechaLetra: {
    width: '100%',
    height: '40%',
    marginTop: -3.8,
    paddingTop: 0,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default styles;

import { ImageBackground, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const MARGIN = 10;

const styles = StyleSheet.create({
  newsItemContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    height: 'auto',
  },
  newsItemContainerOne: {
    width: '100%',
    marginBottom: 90,
  },
  newsPhoto: {
    width: '100%',
    height: 220,
    marginTop: 12,
  },
  newsName: {
    width: '95%',
    marginTop: 13,
    marginLeft: 15, 
    fontSize: 20,
    fontFamily: 'Poppins-Bold', 
    textAlign: 'left',
    color: '#19265D',
  },
  newsFecha: {
    width: '100%',
    marginTop: 6,
    marginLeft: 15,
    fontSize: 19,
    textAlign: 'left',
    color: '#9aa0b8',
    fontFamily: 'Poppins-Bold', 
  },
  newsDescrip: {
    width: '97%',
    marginTop: 20,
    marginLeft: 6,
    marginRight: 15,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
    textAlign: 'justify',
    color: '#19265D',
    fontFamily: 'Poppins-Regular', 
  },
  newsButton: {
    width: width - (MARGIN*2),
    height: 80,
    borderWidth: 3,
    borderColor: '#342274',
    borderRadius: 20,
  },
  newsButtonPhoto: {
    width: 45,
    height: 45,
    position: 'absolute',
    top: 14,
    left: 24,
    zIndex: 1,
    elevation: 1,
  },
  newsButtonTitle: {
    fontSize: 22,
    textAlign: 'justify',
    color: '#19265D',
    position: 'absolute',
    top: 20,
    left: 100,
    zIndex: 1,
    elevation: 1,
    fontFamily: 'Poppins-Bold', 
  },
  viewButton: {
    width: width,
    height: 84,
    paddingTop: 4,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FFF',
  },
});

export default styles;

import { ImageBackground, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const MARGIN = 10;

const styles = StyleSheet.create({
  coursesItemContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    height: 'auto',
  },
  coursesItemContainerOne: {
    width: '100%',
    marginBottom: 90,

  },
  coursesPhoto: {
    width: '100%',
    height: 220,
    marginTop: 12,
  },
  coursesName: {
    width: '95%',
    marginTop: 13,
    marginLeft: 15, 
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#19265D',
  },
  coursesFecha: {
    width: '100%',
    marginTop: 20,
    marginLeft: 15,
    fontSize: 19,
    fontFamily: 'Poppins-Bold', 
    textAlign: 'left',
    color: '#9aa0b8',    
  },
  coursesDescrip: {
    width: '97%',
    marginTop: 19,
    marginLeft: 6,
    marginRight: 15,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'justify',
    color: '#19265D',
    fontFamily: 'Poppins-Regular',
  },
  coursesButton: {
    width: width - (MARGIN*2),
    height: '100%',
    borderWidth: 3,
    borderColor: '#342274',
    borderRadius: 20,
  },
  coursesButtonPhoto: {
    width: 36,
    height: 40,
    position: 'absolute',
    top: 14,
    left: 24,
    zIndex: 1,
    elevation: 1,
  },
  coursesButtonTitle: {
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
    backgroundColor: '#fff',
  },
});

export default styles;

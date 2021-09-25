import { ImageBackground, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  courseslistItemContainer: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
  },
  courseslistPhoto: {
    width: '100%',
    height: 220,
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

import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
  presentacion : {
    height: '100%',
    alignContent: 'center',
    alignItems: 'center'
  },
  fontPhoto : {
    position: 'absolute',
    bottom: 0,
  },
  logoPhoto : {
    position: 'absolute',
    bottom: '50%',
  },
  tabView : {
    height: 70,
    flexDirection: 'row', 
    width:'100%',
    backgroundColor: '#FFF',
  },
  tabTouch: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabImage: {
    width: 30,
    height : 30,     
    borderWidth: 1,
  },
  tabText: {
    
  }
});

export default styles;

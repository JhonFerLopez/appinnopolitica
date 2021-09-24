import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
  tabView : {
    height: 70,
    flexDirection: 'row', 
    width:'100%'
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
    fontSize: 50,
    borderColor: 'red',
    borderWidth: 1,
  }
});

export default styles;

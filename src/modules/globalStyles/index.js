import { StyleSheet, Dimensions } from 'react-native'

export default globalStyle = (name) => {
  if (!name) { return; }
  return styles[name] || '';
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  fontWhite: {
    color: 'white'
  },
  windowWidth: {
    width: width
  },
  windowHeight: {
    height: height
  },
  windowScale: {
    width: width,
    height: height
  },
  homeBottomTabHeight: {
    height: 48
  }
})

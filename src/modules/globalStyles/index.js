import { StyleSheet } from 'react-native'

export default globalStyle = (name) => {
  if (!name) { return; }
  return styles[name] || '';
}

const styles = StyleSheet.create({
  fontWhite: {
    color: 'white'
  }
})
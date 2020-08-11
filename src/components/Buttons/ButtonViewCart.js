import React from 'react'
import { TouchableHighlight, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default ButtonViewCart = () => {
  return (
    <TouchableHighlight style={styles.button} onPress={(evt) => { evt.preventDefault(); console.log('view cart modal'); }}>
      <Icon style={styles.text} size={20} name="bag" />
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    alignSelf: 'center'
  },
  text: {
    ...globalStyle('fontWhite'),
    textAlign: 'center'
  }
})
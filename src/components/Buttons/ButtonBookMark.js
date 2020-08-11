import React from 'react'
import { TouchableHighlight, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default ButtonBookMark = () => {
  return (
    // TODO redux dispatch addToBookMark
    <TouchableHighlight style={styles.button} onPress={(evt) => { evt.preventDefault(); console.log('add to bookmark'); }}>
      <Icon style={styles.text} size={20} name="bookmark-o" />
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
import React from 'react'
import { TouchableHighlight, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export default ButtonShare = () => {
  return (
    <TouchableHighlight style={styles.button} onPress={(evt) => { evt.preventDefault(); console.log('sharing modal'); }}>
      <Icon style={styles.text} size={20} name="md-share" />
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
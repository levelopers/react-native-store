import React from 'react'
import { TouchableHighlight, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default ButtonAccount = ({ style, size, color, onPress }) => {
  return (
    <TouchableHighlight style={[style, styles.button]} onPress={onPress}>
      <Icon style={styles.text} size={size} color={color} name="user-o" />
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center'
  },
  text: {
    ...globalStyle('fontWhite'),
    textAlign: 'center'
  }
})
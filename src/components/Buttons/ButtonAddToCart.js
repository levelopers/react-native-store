import React from 'react'
import { TouchableHighlight, Text, StyleSheet } from 'react-native'

export default ButtonAddToCart = () => {
  return (
    // TODO redux dispatch addToCart
    <TouchableHighlight style={styles.button} onPress={(evt) => { evt.preventDefault(); console.log('add to cart'); }}>
      <Text style={styles.text}>Add To Cart</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    borderColor: 'white',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center'
  },
  text: {
    ...globalStyle('fontWhite'),
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  }
})
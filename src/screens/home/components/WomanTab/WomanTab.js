import React from 'react'
import { Text, View,StyleSheet } from 'react-native'


export default WomanTab = () => {
  return (
    <View style={styles.container}>
      <Text>
        woman
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection: 'column'
  },
  bottomModal: {
    marginTop: '500px'
  }
})
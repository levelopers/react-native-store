import React from 'react'
import { Text, View,StyleSheet } from 'react-native'


export default KidsTab = () => {
  return (
    <View style={styles.container}>
      <Text>
        kids
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
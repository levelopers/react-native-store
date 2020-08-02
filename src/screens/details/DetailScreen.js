import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import Constants from "expo-constants";
import { goBack } from '../../modules/Navigation/StackNavigation';

export default DetailScreen = ({ route }) => {
  const { title } = route.params.data
  return (
    <View style={styles.container}>
      <Text>detail screen works</Text>
      <Text>{title}</Text>
      <TouchableHighlight onPress={() => goBack()}>
        <Text>X</Text>
      </TouchableHighlight>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight
  },
})
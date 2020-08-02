import React from 'react'
import { View, Text } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome';

export default CollectionManTab = ({ navigation }) => {

  return (
    <View>
      <Text>man tab content</Text>
      <TouchableHighlight
        onPress={() => { navigation.pop() }}
      >
        <Icon size={30} name="times" />
      </TouchableHighlight>
    </View>
  )
}
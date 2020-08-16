import Constants from "expo-constants";
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { goBack } from '../../modules/Navigation/StackNavigation';


export default CartScreen = () => {

  return (
    <View style={styles.modalView}>
      <TouchableHighlight
        style={styles.closeButton}
        onPress={() => { goBack() }}
      >
        <Icon size={30} name="times" style={styles.closeIcon} />
      </TouchableHighlight>
      <Text>CartModal</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  closeButton: {
    flexDirection: "row",
    alignSelf: "flex-start",
  },
  closeIcon: {
    fontWeight: '100'
  },
  modalView: {
    paddingTop: Constants.statusBarHeight,
    display: 'flex',
    flexDirection: 'column'
  },
});
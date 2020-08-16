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


export default AccountScreen = () => {

  return (
    <View style={styles.modalView}>
      <TouchableHighlight
        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
        onPress={() => { goBack() }}
      >
        <View>
          <Icon name="times" />
          <Text>AccountScreen</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    paddingTop: Constants.statusBarHeight
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
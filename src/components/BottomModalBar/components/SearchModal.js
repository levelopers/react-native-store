import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  StatusBar
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import Constants from "expo-constants";

export default SearchModal = ({
  modalVisible,
  onCloseModal
}) => {
  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
    >
      <View style={styles.modalView}>
        <TouchableHighlight
          style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
          onPress={onCloseModal}
        >
          <View>
            <Icon name="times" />
            <Text>SearchModal</Text>
          </View>
        </TouchableHighlight>
      </View>
    </Modal>
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

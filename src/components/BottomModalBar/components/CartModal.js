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

export default CartModal = ({
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
          style={styles.closeButton}
          onPress={onCloseModal}
        >
          <Icon size={30} name="times" style={styles.closeIcon} />
        </TouchableHighlight>
        <Text>CartModal</Text>
      </View>
    </Modal>
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

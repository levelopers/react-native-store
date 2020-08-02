import React, { useState, Component } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchModal from "./components/SearchModal";
import CartModal from "./components/CartModal";

export default BottomModal = () => {
  const [modalShowing, setModalShowing] = useState('')
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={styles.openButton}
          onPress={() => setModalShowing('searchModal')}
        >
          <Icon name="search" style={styles.iconColor} />
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.openButton}
          onPress={() => setModalShowing('cartModal')}
        >
          <Icon name="shopping-bag" style={styles.iconColor} />
        </TouchableHighlight>
      </View>
      <SearchModal modalVisible={modalShowing === 'searchModal'} onCloseModal={() => setModalShowing('')} />
      <CartModal modalVisible={modalShowing === 'cartModal'} onCloseModal={() => setModalShowing('')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.8
  },
  openButton: {
    padding: 10,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // paddingVertical: 5
  },
  iconColor: {
    color: 'white',
    fontSize: 15,
    fontWeight: '100'
  }
});

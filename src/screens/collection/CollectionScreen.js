import Constants from "expo-constants";
import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CollectionManTab from "./CollectionManTab";

export default CollectionScreen = ({
  navigation
}) => {
  const CollectionScreenTopTabs = createMaterialTopTabNavigator();
  return (
      <CollectionScreenTopTabs.Navigator
        style={styles.navigationContainer}
        tabBarOptions={{
          indicatorStyle: styles.topTabIndicatorStyle,
          style: styles.topTabsContainer,
          tabStyle: styles.topTabs,
          labelStyle: styles.topTabLabelStyle
        }}
      >
        <CollectionScreenTopTabs.Screen
          name="CollectionManTab"
          component={CollectionManTab}
          options={{
            title: "MAN"
          }}
        />
        <CollectionScreenTopTabs.Screen
          name="CollectionManTab1"
          component={CollectionManTab}
          options={{
            title: "MAN"
          }}
        />
      </CollectionScreenTopTabs.Navigator>
      // <TouchableHighlight
      //   style={styles.closeButton}
      //   onPress={() => {navigation.pop() }}
      // >
      //   <Icon size={30} name="times" style={styles.closeIcon} />
      // </TouchableHighlight>

  )
}

const styles = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    right: 20,
    top: Constants.statusBarHeight
  },
  closeIcon: {
    fontWeight: '100'
  },
  modalView: {
    // paddingTop: Constants.statusBarHeight,
    // display: 'flex',
    // flexDirection: 'row'
    // // flexDirection: 'column'
  },
  navigationContainer: {
    flexDirection: 'column'
  },
  // topTabIndicatorStyle: {
  //   backgroundColor: 'black'
  // },
  // topTabsContainer: {
  //   backgroundColor: 'transparent',
  //   position: 'absolute',
  //   top: 30,
  //   left: 50,
  //   right: 50,
  // },
  // topTabs: {
  // },
  // topTabLabelStyle: {
  //   fontWeight: 'bold',
  //   fontSize: 15
  // }
});

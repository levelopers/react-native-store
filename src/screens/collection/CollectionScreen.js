import Constants from "expo-constants";
import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator, MaterialTopTabBar } from '@react-navigation/material-top-tabs';
import CollectionManTab from "./components/CollectionManTab";
import globalStyles from "../../modules/globalStyles";
import CollectionWomanTab from "./components/CollectionWomanTab";
import CollectionKidsTab from "./components/CollectionKidsTab";
import { goBack, navigate } from "../../modules/Navigation/StackNavigation";

export default CollectionScreen = ({
  navigation
}) => {
  const CollectionScreenTopTabs = createMaterialTopTabNavigator();
  return (
    <CollectionScreenTopTabs.Navigator
      style={styles.navigationContainer}
      tabBar={tabBar}
      tabBarOptions={{
        indicatorStyle: styles.topTabIndicatorStyle,
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
        name="CollectionWomanTab"
        component={CollectionWomanTab}
        options={{
          title: "WOMAN"
        }}
      />
      <CollectionScreenTopTabs.Screen
        name="CollectionKidsTab"
        component={CollectionKidsTab}
        options={{
          title: "KIDS"
        }}
      />
    </CollectionScreenTopTabs.Navigator>
  )
}

const tabBar = (props) => {
  return (
    <View style={styles.topTabsContainer} >
      <MaterialTopTabBar {...props} style={styles.materialTopTab} />
      <Icon
        size={30}
        name="md-close"
        color='white'
        style={styles.closeIcon}
        onPress={() => { navigate('Home') }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    alignSelf: 'center'
  },
  navigationContainer: {
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  topTabIndicatorStyle: {
    backgroundColor: 'white',
  },
  topTabLabelStyle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white'
  },
  topTabsContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    paddingVertical: 30,
    paddingHorizontal: 25
  },
  materialTopTab: {
    flex: 1,
    marginRight: 30,
    backgroundColor: 'transparent'
  },
});

import { createMaterialTopTabNavigator, MaterialTopTabBar } from '@react-navigation/material-top-tabs';
import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { navigate } from "../../modules/Navigation/StackNavigation";
import CollectionTabScreen from "./components/CollectionTabScreenContainer";

export default CollectionScreen = () => {
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
        name="CollectionMenTab"
        component={CollectionTabScreen}
        options={{
          title: "MAN"
        }}
      />
      <CollectionScreenTopTabs.Screen
        name="CollectionWomenTab"
        component={CollectionTabScreen}
        options={{
          title: "WOMAN"
        }}
      />
      <CollectionScreenTopTabs.Screen
        name="CollectionKidsTab"
        component={CollectionTabScreen}
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

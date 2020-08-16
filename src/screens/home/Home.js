import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import KidsTab from './components/KidsTab/KidsTab';
import ManTab from './components/ManTab/ManTab';
import WomanTab from './components/WomanTab/WomanTab';

export default Home = () => {
  const navigation = useNavigation()
  const MaterialTopTabs = createMaterialTopTabNavigator();
  return (
    <MaterialTopTabs.Navigator
      style={styles.container}
      tabBarOptions={{
        indicatorStyle: styles.topTabIndicatorStyle,
        style: styles.topTabsContainer,
        tabStyle: styles.topTabs,
        labelStyle: styles.topTabLabelStyle
      }}
    >
      <MaterialTopTabs.Screen
        name="DashBoardManScreen"
        component={ManTab}
        options={{
          title: "MAN"
        }}
      />
      <MaterialTopTabs.Screen
        name="DashBoardWomanScreen"
        component={WomanTab}
        options={{
          title: "WOMAN"
        }}
      />
      <MaterialTopTabs.Screen
        name="DashBoardKidsScreen"
        component={KidsTab}
        options={{
          title: "KIDS"
        }}
      />
    </MaterialTopTabs.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    // height: Dimensions.get('window').height,
    height: '100%'
  },
  topTabIndicatorStyle: {
    backgroundColor: 'black'
  },
  topTabsContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 30,
    left: 50,
    right: 50,
  },
  topTabs: {
  },
  topTabLabelStyle: {
    fontWeight: 'bold',
    fontSize: 15
  }
})
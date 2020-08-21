import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import TabScreens from './components/TabScreen/TabScreenContainer';

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
        component={TabScreens}
        options={{
          title: "MAN"
        }}
      />
      <MaterialTopTabs.Screen
        name="DashBoardWomanScreen"
        component={TabScreens}
        options={{
          title: "WOMAN"
        }}
      />
      <MaterialTopTabs.Screen
        name="DashBoardKidsScreen"
        component={TabScreens}
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
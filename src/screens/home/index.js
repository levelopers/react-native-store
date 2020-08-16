import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import globalStyles from '../../modules/globalStyles';
import { navigate } from '../../modules/Navigation/StackNavigation';
import ManNewInScreen from './components/ManScreens/ManNewInScreen';
import Home from './Home';
export default () => {
  const BottomTab = createMaterialBottomTabNavigator();
  return (
    <BottomTab.Navigator
      initialRouteName="HomeStack"
      labeled={false}
      barStyle={styles.barStyle}
    >
      <BottomTab.Screen
        name="SearchScreenNav"
        component={fakeComponent}
        style={{ display: 'none' }}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} style={styles.icon} />
          ),
        }}
        listeners={{
          tabPress: e => {
            e.preventDefault();
            navigate('SearchScreen')
          },
        }}
      />
      <BottomTab.Screen
        name="HomeStack"
        component={HomeStack}
        listeners={{
          tabPress: e => {
            e.preventDefault();
            // navigate('CartScreen')
          },
        }}
      />
      <BottomTab.Screen
        name="CartScreenNav"
        component={fakeComponent}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="shopping-bag" color={color} style={styles.icon} />
            //TODO style adjustment <ButtonViewCart/>
          )
        }}
        listeners={{
          tabPress: e => {
            e.preventDefault();
            navigate('CartScreen')
          },
        }}
      />
    </BottomTab.Navigator>
  )
}

const HomeStack = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <HomeStack.Screen
        name="ManNewInScreen"
        component={ManNewInScreen}
        options={{
          headerTitle: 'New In',
          headerBackTitle: '',
          headerBackTitleStyle: { display: 'none' }
        }}
      />
    </HomeStack.Navigator>
  )
}
const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: 'black',
    height: globalStyles('homeBottomTabHeight').height
  },
  icon: {
    color: 'white',
    fontSize: 16,
    fontWeight: '100',
    opacity: 0.8
  },
})
var fakeComponent = () => (
  <View></View>
)
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ButtonAccount from '../../components/Buttons/ButtonAccount';
import ButtonBookMark from '../../components/Buttons/ButtonBookMark';
import ButtonMenu from '../../components/Buttons/ButtonMenu';
import ButtonSearch from '../../components/Buttons/ButtonSearch';
import ButtonViewCart from '../../components/Buttons/ButtonViewCart';
import globalStyles from '../../modules/globalStyles';
import { navigate } from '../../modules/Navigation/StackNavigation';
import HomeStack from './HomeStack';

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
            <ButtonSearch size={16} color={color} />
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
        name="BookMarkScreenNav"
        component={fakeComponent}
        style={{ display: 'none' }}
        options={{
          tabBarIcon: ({ color }) => (
            <ButtonBookMark size={16} color={color} />
          ),
        }}
        listeners={{
          tabPress: e => {
            e.preventDefault();
            navigate('BookMarkScreen')
          },
        }}
      />
      <BottomTab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <ButtonMenu size={16} color={color} />
          ),
        }}
        listeners={{
          tabPress: e => {
            e.preventDefault();
            navigate('CollectionScreen')
          },
        }}
      />
      <BottomTab.Screen
        name="AccountScreenNav"
        component={fakeComponent}
        style={{ display: 'none' }}
        options={{
          tabBarIcon: ({ color }) => (
            <ButtonAccount size={16} color={color} />
          ),
        }}
        listeners={{
          tabPress: e => {
            e.preventDefault();
            navigate('AccountScreen')
          },
        }}
      />
      <BottomTab.Screen
        name="CartScreenNav"
        component={fakeComponent}
        options={{
          tabBarIcon: ({ color }) => (
            <ButtonViewCart size={16} color={color} />
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
const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: 'black',
    height: globalStyles('homeBottomTabHeight').height
  },
  icon: {
    color: 'white',
    fontSize: 20,
    fontWeight: '100',
  },
})
var fakeComponent = () => (
  <View></View>
)
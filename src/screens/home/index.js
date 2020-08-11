import React from 'react'
import ListView from '../listView/ListView';
import Home from './Home';
import { createStackNavigator } from '@react-navigation/stack';
import ManNewInScreen from './components/ManScreens/ManNewInScreen';

export default () => {
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
          // headerBackTitleStyle: {display: 'none'}
        }}
      />
    </HomeStack.Navigator>
  )
}
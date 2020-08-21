import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ButtonBack from '../../components/Buttons/ButtonBack';
import ListScreenContainer from './components/ListScreenContainer';
import Home from './Home';

const HomeStack = createStackNavigator();

export default () => {
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
        name='ListScreen'
        component={ListScreenContainer}
        options={({ route }) => ({
          title: route.params.title,
          headerBackTitleStyle: { display: 'none' },
          headerStyle: { backgroundColor: 'black', shadowOffset: { height: 0 } },
          headerTitleStyle: { color: 'white' },
          headerLeft: ({ onPress }) => (
            <ButtonBack
              size={25}
              style={{ padding: 10 }}
              onPress={onPress}
            />
          )
        })}
      />
    </HomeStack.Navigator>
  )
}
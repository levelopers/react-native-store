import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { StackNavigationRef } from './src/modules/Navigation/StackNavigation';
import store from './src/redux/store';
import CollectionScreen from './src/screens/collection/CollectionScreen';
import DetailScreen from './src/screens/details/DetailScreen';
import Home from './src/screens/home/index';


export default function App() {
  const Stack = createStackNavigator();
  const MaterialBottomTabs = createMaterialBottomTabNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer ref={StackNavigationRef} styles={styles.container}>
        {/* <StatusBar/> */}
        <Stack.Navigator mode="modal">
          <Stack.Screen
            name="Home"
            children={Home}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="CollectionScreen"
            component={CollectionScreen}
            options={{
              headerShown: false
            }} />
          <Stack.Screen
            name="DetailScreen"
            component={DetailScreen}
            options={{
              headerShown: false,
              gestureEnabled: false
            }} />
        </Stack.Navigator>
        {/* TODO detail screen wont show bottom modal */}
        {/* <BottomModal /> */}
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
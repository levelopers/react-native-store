import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { StackNavigationRef } from './src/modules/Navigation/StackNavigation';
import store from './src/redux/store';
import CartScreen from './src/screens/cart/CartScreen';
import CollectionScreen from './src/screens/collection';
import DetailScreen from './src/screens/details/DetailScreenContainer';
import Home from './src/screens/home/index';
import SearchScreen from './src/screens/search/SearchScreen';
import BookMarkScreen from './src/screens/bookmark/BookMarkScreen';
import AccountScreen from './src/screens/AccountScreen/AccountScreen';


export default function App() {
  const Stack = createStackNavigator();

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
          <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="CartScreen"
            component={CartScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="BookMarkScreen"
            component={BookMarkScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="AccountScreen"
            component={AccountScreen}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
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
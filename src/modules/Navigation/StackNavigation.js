import * as React from 'react';

export const StackNavigationRef = React.createRef();

export function navigate(name, params) {
  if (StackNavigationRef.current?.getCurrentRoute().name === name) {
    goBack()
  }
  StackNavigationRef.current?.navigate(name, params);
}

export function goBack() {
  StackNavigationRef.current.goBack()
}

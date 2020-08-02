import * as React from 'react';

export const StackNavigationRef = React.createRef();

export function navigate(name, params) {
  StackNavigationRef.current?.navigate(name, params);
}

export function goBack(){
  StackNavigationRef.current.goBack()
}

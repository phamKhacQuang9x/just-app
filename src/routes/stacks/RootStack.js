import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainStack from './MainStack';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <>
      <Stack.Navigator>
        {true ? AuthStack(Stack) : MainStack(Stack)}
      </Stack.Navigator>
    </>
  );
};

export default RootStack;

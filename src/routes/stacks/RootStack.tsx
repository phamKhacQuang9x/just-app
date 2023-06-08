import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ROUTES, { ROUTE_TABS } from 'routes/name';
import Login from 'screens/Login/Login';
import MainTab from 'routes/tabs/MainTab';

const Stack = createNativeStackNavigator<Record<string, any>>();

const RootStack = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName={ROUTES.LOGIN_SCREEN}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={ROUTES.LOGIN_SCREEN} component={Login} />
        <Stack.Screen name={ROUTE_TABS.MAIN_TAB} component={MainTab} />
      </Stack.Navigator>
    </>
  );
};

export default RootStack;

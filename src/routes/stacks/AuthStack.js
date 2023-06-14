import React from 'react';
import Login from 'screens/Login/Login';
import Register from 'screens/Register/Register';

export default function (Stack) {
  return (
    <>
      <Stack.Screen name="LOGIN" component={Login} />
      <Stack.Screen name="REGISTER" component={Register} />
    </>
  );
}

import React from 'react';
import Home from 'screens/Home/Home';
import Profile from 'screens/Profile/Profile';

export default function (Stack) {
  return (
    <>
      <Stack.Screen name="HOME" component={Home} />
      <Stack.Screen name="PROFILE" component={Profile} />
    </>
  );
}

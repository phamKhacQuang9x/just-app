import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import RootStack from 'routes/stacks/RootStack';
import colors from 'theme/colors';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={colors.white[500]}
        translucent={true}
      />
      <RootStack />
    </NavigationContainer>
  );
};

export default App;

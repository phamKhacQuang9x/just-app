import { Button, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from 'theme/colors';
import { navigateTo } from '../../routes/actions';
import ROUTES from '../../routes/name';

const Login = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          borderWidth: 1,
          backgroundColor: Colors.success[500],
          width: 350,
          height: 48,
        }}
      >
        <Button
          title="Submit"
          color={Colors.white[400]}
          onPress={() => {
            navigateTo(ROUTES.HOME_SCREEN);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;

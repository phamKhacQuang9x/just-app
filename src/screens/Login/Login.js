import { View } from 'react-native';
import React from 'react';
import styles from './Login.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextInputWithLabel from 'components/TextInput/TextInputWithLabel';

const Login = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TextInputWithLabel placeHolder={'User name/Email'} />
      </SafeAreaView>
    </View>
  );
};

export default Login;

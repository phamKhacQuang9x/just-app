import React from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';

import TextInputWithLabel from 'components/TextInput/TextInputWithLabel';
import ButtonWithLoader from 'components/Button/ButtonWithLoader';

import styles from './Login.styles';
import useLoginLogic from './Login.logic';

const Login = ({ navigation }) => {
  const {
    isSecure,
    onLogin,
    onChangeEmail,
    onChangePassword,
    values,
    errorsValidate,
    touched,
  } = useLoginLogic(navigation);

  return (
    <View style={styles.container}>
      <FastImage
        source={require('../../assets/images/just-logo.png')}
        style={styles.logoImg}
      />
      <TextInputWithLabel
        label={'User name'}
        placeHolder={'Enter your email'}
        value={values.email}
        onChangeText={onChangeEmail}
        passValidate={!errorsValidate.email && !!values.email}
        error={touched.email && errorsValidate.email}
      />
      <TextInputWithLabel
        label={'Password'}
        value={values.password}
        placeHolder={'Enter your password'}
        isSecure={isSecure}
        secureTextEntry={isSecure}
        onChangeText={onChangePassword}
        passValidate={!errorsValidate.password && !!values.password}
        error={touched.password && errorsValidate.password}
      />
      <ButtonWithLoader text={'Login'} onPress={onLogin} />
    </View>
  );
};

export default Login;

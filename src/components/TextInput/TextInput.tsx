import React from 'react';
import { TextInputProps, View } from 'react-native';
import { TextInput as BaseTextInput } from 'react-native-gesture-handler';

import Password, { PasswordInput } from './Password';
import IconTextInput, { IconTextInputProps } from './IconTextInput';
import styles from './styles';

interface PropTypes extends TextInputProps {}

interface TextInputType extends React.FC<PropTypes> {
  Password: PasswordInput;
  IconTextInput: IconTextInputProps;
}

const TextInput: TextInputType = (props: any) => {
  return (
    <View style={styles.container}>
      <BaseTextInput style={styles.input} {...props} />
    </View>
  );
};

TextInput.Password = Password;
TextInput.IconTextInput = IconTextInput;

export default TextInput;

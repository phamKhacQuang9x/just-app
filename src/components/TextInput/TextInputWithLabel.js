import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import colors from 'theme/colors';

const TextInputWithLabel = ({
  label,
  value,
  placeHolder,
  inputStyles,
  textStyles,
  isSecure,
  onChangeText,
  props,
}) => {
  return (
    <View>
      <TextInput
        value={value}
        placeholder={placeHolder}
        onChangeText={onChangeText}
        style={styles.inputStyles}
        {...props}
      />
    </View>
  );
};

export default TextInputWithLabel;

const styles = StyleSheet.create({
  inputStyles: {
    height: 48,
    backgroundColor: colors.black[50],
  },
});

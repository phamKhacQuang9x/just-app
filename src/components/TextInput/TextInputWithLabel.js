import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import colors from 'theme/colors';

const TextInputWithLabel = ({
  label,
  value,
  placeHolder,
  inputStyles,
  textStyles,
  isSecure,
  onChangeText,
  passValidate,
  error,
  props,
}) => {
  return (
    <View>
      <Text style={styles.labelStyles}>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeHolder}
        placeholderTextColor={colors.black[300]}
        onChangeText={onChangeText}
        style={styles.inputStyles}
        secureTextEntry={isSecure}
        passValidate={passValidate}
        error={error}
        {...props}
      />
      {error && (
        <View style={styles.txtError}>
          <Text color={colors.danger[500]} level="sup">
            {error}
          </Text>
        </View>
      )}
    </View>
  );
};

export default TextInputWithLabel;

const styles = StyleSheet.create({
  inputStyles: {
    height: 56,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.ink[50],
    fontSize: 16,
    borderWidth: 1,
  },
  labelStyles: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
});

import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';
import colors from 'theme/colors';

const ButtonWithLoader = ({ text, onPress }) => {
  return (
    <Pressable style={styles.btnStyles} onPress={onPress}>
      <Text style={styles.txtStyles}>{text}</Text>
    </Pressable>
  );
};

export default ButtonWithLoader;

const styles = StyleSheet.create({
  btnStyles: {
    height: 56,
    backgroundColor: colors.info[500],
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtStyles: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: colors.white[500],
  },
});

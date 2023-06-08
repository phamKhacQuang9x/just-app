import React, { memo } from 'react';
import {
  ColorValue,
  StyleSheet,
  Text,
  TextStyle,
  StyleProp,
} from 'react-native';
import Colors from 'theme/colors';

export interface PropTypes {
  color?: ColorValue;
  style?: StyleProp<TextStyle>;
  fontWeight?: 'Regular' | 'Bold' | 'ExtraBold';
}

const TextBase: React.FC<PropTypes> = memo(
  ({ children, style, color = Colors.black, fontWeight = 'Regular' }) => {
    return (
      <Text
        style={[
          styles.text,
          color ? { color } : undefined,
          style,
          { fontFamily: `Mulish-${fontWeight}` },
        ]}>
        {children}
      </Text>
    );
  },
);

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default TextBase;

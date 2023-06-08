import React, { memo } from 'react';
import {
  ColorValue,
  StyleSheet,
  Text,
  TextStyle,
  StyleProp,
  Platform,
} from 'react-native';
import colors from 'theme/colors';
import { FontFamily } from 'utils/screen';

export interface PropTypes {
  level?: 'heading' | 'body' | 'title' | 'sup' | 'tiny' | 'h6' | 'h7';
  color?: ColorValue;
  style?: StyleProp<TextStyle>;
  bold?: 'regular' | 'semibold' | 'bold' | 'extrabold';
  numberOfLines?: number;
  fontWeight?:
    | 'bold'
    | '800'
    | 'normal'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '900'
    | undefined;
}

const LEVEL_STYLES: Record<string, TextStyle> = {
  heading: {
    fontSize: 24,
    lineHeight: 30,
    letterSpacing: 0.1,
    fontWeight: '800',
  },
  title: { fontSize: 20, lineHeight: 28, letterSpacing: 0.1 },
  body: { fontSize: 16, lineHeight: 20, letterSpacing: 0.1 },
  sup: { fontSize: 14, lineHeight: 20, letterSpacing: 0.1 },
  tiny: { fontSize: 12, lineHeight: 18, letterSpacing: 0.1 },
  h6: { fontSize: 10, lineHeight: 16, letterSpacing: 0.1 },
  h7: { fontSize: 8, lineHeight: 11, letterSpacing: 0.1 },
};

const LEVEL_FONT_WEIGHT: Record<string, TextStyle> = {
  regular: {
    ...Platform.select({
      ios: {
        fontWeight: '400',
      },
      android: {
        fontFamily: 'Mulish-Regular',
      },
    }),
  },
  semibold: {
    ...Platform.select({
      ios: {
        fontWeight: '600',
      },
      android: {
        fontFamily: 'Mulish-SemiBold',
      },
    }),
  },
  bold: {
    ...Platform.select({
      ios: {
        fontWeight: '700',
      },
      android: {
        fontFamily: 'Mulish-Bold',
      },
    }),
  },
  extrabold: {
    ...Platform.select({
      ios: {
        fontWeight: '800',
      },
      android: {
        fontFamily: 'Mulish-ExtraBold',
      },
    }),
  },
};

const TitleText: React.FC<PropTypes> = memo(
  ({
    children,
    level = 'sup',
    style,
    color = colors.black[500],
    bold = 'regular',
    numberOfLines,
    fontWeight,
  }) => {
    return (
      <Text
        numberOfLines={numberOfLines}
        style={[
          styles.text,
          LEVEL_STYLES[level],
          LEVEL_FONT_WEIGHT[bold],
          color ? { color } : undefined,
          fontWeight ? { fontWeight } : undefined,
          style,
        ]}
      >
        {children}
      </Text>
    );
  },
);

const styles = StyleSheet.create({
  text: {
    fontFamily: FontFamily.Mulish,
  },
});

export default TitleText;

import React, { memo } from 'react';
import {
  ActivityIndicator,
  ColorValue,
  GestureResponderEvent,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from 'react-native';
import colors from 'theme/colors';

import TitleText from '../Text/TitleText';

export interface PropTypes {
  onPress?: ((event: GestureResponderEvent | any) => void) | null;
  buttonStyle?: ViewStyle;

  text?: string;
  textLevel?: 'heading' | 'body' | 'title' | 'sup' | 'tiny' | 'h6';

  loading?: boolean;
  disabled?: boolean;
  hideContentWhileLoading?: boolean;
  isActive?: boolean;

  backGroundColor?: ColorValue;
  inActiveColor?: ColorValue;
  borderColor?: ColorValue;
  textColor?: ColorValue;
  textElement?: any;
  borderWidth?: number;
  loadingStyle?: StyleProp<ViewStyle>;
}

const Button: React.FC<PropTypes> = memo(
  ({
    text,
    loading,
    hideContentWhileLoading,
    disabled,
    backGroundColor = colors.success[500],
    inActiveColor = colors.black[300],
    buttonStyle,
    onPress,
    borderColor,
    borderWidth,
    textElement,
    textColor = colors.white[500],
    textLevel = 'body',
    loadingStyle,
  }) => {
    const isHideContent = loading && hideContentWhileLoading;
    const isDisabled = disabled || loading;

    const styleButton = [
      styles.buttonView,
      buttonStyle,
      { backgroundColor: isDisabled ? inActiveColor : backGroundColor },
      borderColor ? { borderColor } : undefined,
      borderWidth ? { borderWidth } : undefined,
    ];

    const mapLoadingStyle = loadingStyle ? loadingStyle : styles.loadingIcon;

    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={isDisabled}
        style={styleButton}
      >
        {text && !isHideContent && (
          <TitleText level={textLevel} bold="bold" color={textColor}>
            {text}
          </TitleText>
        )}
        {typeof textElement === 'function' && textElement()}
        {loading && (
          <ActivityIndicator
            color={colors.white[500]}
            style={mapLoadingStyle}
          />
        )}
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  buttonView: {
    width: '100%',
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingIcon: {
    position: 'absolute',
    right: 20,
  },
});

export default Button;

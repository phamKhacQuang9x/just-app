import ContentText from 'components/Base/Text/ContentText';
import React, { memo } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import FastImage, { FastImageProps } from 'react-native-fast-image';
import Space from '../Space';

import Colors from 'theme/colors';

// google blue color: #4285F4

const SocialLogin = ({
  onPress,
  text,
  backgroundColor = Colors.buttonColor,
  source,
  textColor,
  imageStyle,
  loading,
  disabled,
  inActiveColor = Colors.alto,
}: {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  text: string;
  backgroundColor: string;
  source: FastImageProps['source'];
  imageStyle: FastImageProps['style'];
  textColor: string;
  loading?: boolean;
  disabled?: boolean;
  inActiveColor?: string;
}) => {
  const isDisabled = disabled || loading;
  return (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={onPress}
      style={[
        styles.containerButton,
        {
          backgroundColor: isDisabled ? inActiveColor : backgroundColor,
        },
      ]}>
      <FastImage source={source} style={imageStyle} />
      <Space width={10} />
      <ContentText size={12} color={textColor} weight="400">
        {text}
      </ContentText>
    </TouchableOpacity>
  );
};

export default memo(SocialLogin);

const styles = StyleSheet.create({
  containerButton: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.abbey,
    width: 200,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 17,
  },
  iconStyle: {
    marginHorizontal: 4,
  },
});

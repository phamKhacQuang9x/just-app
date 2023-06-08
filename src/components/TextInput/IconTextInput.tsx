import TitleText from 'components/Base/Text/TitleText';
import { SVGIcon } from 'icons';
import React, { memo, useState, useCallback } from 'react';
import {
  TextInputProps,
  TextStyle,
  View,
  ColorValue,
  OpaqueColorValue,
  ViewStyle,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import colors from 'theme/colors';
import styles from './styles';

interface PropTypes extends TextInputProps {
  iconLeft?:
    | {
        name: string;
        color?: ColorValue | OpaqueColorValue;
        size?: number;
        style?: TextStyle;
        activeIcon?: string;
        errorColor?: ColorValue | OpaqueColorValue;
      }
    | undefined;
  iconRight?:
    | {
        name: string;
        color?: string;
        size?: number;
        style?: TextStyle;
      }
    | undefined;
  error?: string | boolean;
  passValidate?: boolean;
  onChangeTextWithField?: Function;
  fieldInput?: string;
  stylesInput?: ViewStyle;
  textLeft?: Element;
}

export interface IconTextInputProps extends React.FC<PropTypes> {}

const IconTextInput: IconTextInputProps = ({
  iconLeft,
  iconRight,
  error,
  passValidate,
  onChangeTextWithField,
  fieldInput,
  stylesInput,
  textLeft,
  ...rest
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const onFocusInput = useCallback(() => {
    setIsFocus(true);
  }, [setIsFocus]);

  const onEndEditingInput = useCallback(() => {
    setIsFocus(false);
  }, [setIsFocus]);

  const onChangeTextInput = useCallback(
    (value: string) => {
      onChangeTextWithField && onChangeTextWithField(value, fieldInput);
    },
    [fieldInput, onChangeTextWithField],
  );

  let borderColor = '';
  let iconName = iconLeft?.name;
  let iconColor = iconLeft?.color;

  if ((isFocus && !error) || !error) {
    borderColor = colors.black[500];
    iconName = iconLeft?.activeIcon;
  }
  if (error) {
    borderColor = colors.danger[400];
    iconName = iconLeft?.name;
    iconColor = iconLeft?.errorColor;
  }
  if (!isFocus && !error && !passValidate) {
    borderColor = colors.black[300];
    iconName = iconLeft?.name;
  }
  return (
    <View style={styles.container}>
      <View style={styles.wrapInput}>
        {iconLeft && iconName && (
          <View style={styles.iconLeft}>
            <SVGIcon
              iconName={iconName}
              size={iconLeft.size}
              colour={iconColor}
            />
          </View>
        )}
        {iconRight && (
          <Icon
            name={iconRight.name}
            size={iconRight.size}
            color={iconRight.color}
            style={styles.iconRight}
          />
        )}

        {textLeft && textLeft}
        <TextInput
          onFocus={onFocusInput}
          onEndEditing={onEndEditingInput}
          onChangeText={onChangeTextInput ?? rest.onChangeText}
          autoCorrect={false}
          {...rest}
          style={[
            styles.input,
            iconLeft ? styles.paddingLeft : styles.spaceLeft,
            { borderColor },
            { color: error ? colors.danger[400] : colors.black[500] },
            stylesInput,
          ]}
          placeholderTextColor={colors.black[500]}
        />
      </View>

      {error && (
        <View style={styles.txtError}>
          <TitleText color={colors.danger[400]} level="sup">
            {error}
          </TitleText>
        </View>
      )}
    </View>
  );
};

IconTextInput.displayName = 'IconTextInput';

export default memo(IconTextInput);

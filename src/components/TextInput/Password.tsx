import TitleText from 'components/Base/Text/TitleText';
import { SVGIcon } from 'icons';
import React, { memo, useCallback, useState } from 'react';
import {
  TextInputProps,
  TextStyle,
  View,
  ColorValue,
  OpaqueColorValue,
  StyleProp,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import Colors from 'theme/colors';
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
  error?: string | boolean;
  passValidate?: boolean;
  onChangeTextWithField?: Function;
  fieldInput?: string;
  textLeft?: Element;
  stylesPassword?: StyleProp<TextStyle> | undefined;
}

export interface PasswordInput extends React.FC<PropTypes> {}

const Password: PasswordInput = ({
  iconLeft,
  error,
  passValidate,
  onChangeTextWithField,
  fieldInput,
  textLeft,
  stylesPassword,
  ...rest
}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isFocus, setIsFocus] = useState(false);

  const toggleSecureTextEntry = useCallback(
    () => setSecureTextEntry(state => !state),
    [setSecureTextEntry],
  );

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
    borderColor = Colors.mineShaft;
    iconName = iconLeft?.activeIcon;
  }
  if (error) {
    borderColor = Colors.errorColor;
    iconName = iconLeft?.name;
    iconColor = iconLeft?.errorColor;
  }
  if (!isFocus && !error && !passValidate) {
    borderColor = Colors.grey;
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

        <Icon
          name={secureTextEntry ? 'eye-off' : 'eye'}
          size={20}
          color={Colors.grey}
          style={styles.iconRight}
          onPress={toggleSecureTextEntry}
        />
        {textLeft && textLeft}
        <TextInput
          autoCorrect={false}
          onFocus={onFocusInput}
          onEndEditing={onEndEditingInput}
          onChangeText={onChangeTextInput ?? rest.onChangeText}
          style={[
            styles.input,
            styles.passwordInput,
            iconLeft ? styles.paddingLeft : undefined,
            { borderColor },
            { color: error ? Colors.errorColor : Colors.black },
            stylesPassword,
          ]}
          {...rest}
          secureTextEntry={secureTextEntry}
          blurOnSubmit={false}
          placeholderTextColor={Colors.grey}
        />
      </View>
      {error && typeof error === 'string' && (
        <View style={styles.txtError}>
          <TitleText color={Colors.errorColor} level="sup">
            {error}
          </TitleText>
        </View>
      )}
    </View>
  );
};

Password.displayName = 'Password';

export default memo(Password);

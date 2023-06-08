import React, { memo } from 'react';
import { ColorValue, StyleSheet, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import colors from 'theme/colors';

const SUPPORTED_ICON = {
  Feather,
  FontAwesome5,
};

export interface PropTypes {
  checked?: boolean;
  tintColor?: ColorValue;
  checkedIconName?: string;
  iconColor?: string;
  iconSet?: 'Feather' | 'FontAwesome5';
  checkBoxType?: 'square' | 'circle';
  checkBoxSize?: number;
  iconSize?: number;
}

const CheckBox: React.FC<PropTypes> = memo(
  ({
    checked = false,
    tintColor = colors.success[500],
    checkedIconName = 'check',
    iconColor = colors.white[500],
    iconSet = 'FontAwesome5',
    checkBoxType = 'square',
    checkBoxSize = 24,
    iconSize = 14,
  }) => {
    const Icon = SUPPORTED_ICON[iconSet];
    const checkBoxShape = checkBoxType === 'square' ? undefined : 30;
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: checked ? tintColor : colors.black[300] },
          {
            borderRadius: checkBoxShape,
          },
          {
            width: checkBoxSize,
            height: checkBoxSize,
          },
        ]}
      >
        {checked ? (
          <Icon name={checkedIconName} size={iconSize} color={iconColor} />
        ) : (
          <View
            style={[
              styles.unCheckView,
              {
                borderRadius: checkBoxShape,
              },
              {
                width: checkBoxSize,
                height: checkBoxSize,
              },
            ]}
          />
        )}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  unCheckView: {
    width: 24,
    height: 24,
    backgroundColor: colors.white[500],
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.black[300],
  },
});

export default CheckBox;

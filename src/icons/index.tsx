import * as React from 'react';
import colors from 'theme/colors';
import Colors from 'theme/colors';

// import { colors } from '~/themes/main/default-theme';
import { getIconComponent } from './map';
import { Props } from './types';

export const SVGIcon = ({
  iconName,
  colour = colors.black[500],
  stroke,
  size = 24,
  disabled = false,
  width,
  height,
}: Props): React.ReactElement => {
  const iconColour = disabled ? Colors.black[500] : colour;

  const iconProps = {
    colour: iconColour,
    fill: iconColour,
    stroke,
    width: width ? width : size,
    height: height ? height : size,
  };

  return getIconComponent(iconName, iconProps);
};

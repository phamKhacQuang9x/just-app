import { InnerProps } from 'icons/types';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import Colors from 'theme/colors';

export const checked = ({
  colour = Colors.limeade,
  width = 12,
  height = 12,
}: InnerProps) => (
  <Svg viewBox="0 0 13 13" width={width} height={height}>
    <Path
      fill={colour}
      d="M4.4625 9.9855L0.75 6.273L1.8105 5.2125L4.46363 7.86262L4.4625 7.86375L10.8263 1.5L11.8868 2.5605L5.523 8.925L4.46325 9.98475L4.4625 9.9855Z"
    />
  </Svg>
);

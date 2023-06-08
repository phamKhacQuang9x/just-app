import { InnerProps } from 'icons/types';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import Colors from 'theme/colors';

export const chevronRight = ({
  width = 16,
  height = 16,
  colour = Colors.mineShaft,
}: InnerProps) => (
  <Svg viewBox="0 0 24 24" width={width} height={height}>
    <Path
      d="M8.46519 20.485L16.9502 12L8.4652 3.51498L7.0502 4.92898L14.1222 12L7.05019 19.071L8.46519 20.485Z"
      fill={colour}
    />
  </Svg>
);

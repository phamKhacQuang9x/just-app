import { InnerProps } from 'icons/types';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import Colors from 'theme/colors';

export const chevronDown = ({
  width = 16,
  height = 16,
  colour = Colors.mineShaft,
}: InnerProps) => (
  <Svg viewBox="0 0 16 16" width={width} height={height}>
    <Path
      fill={colour}
      d="M12 6.82962C12.0003 6.93635 11.9814 7.0418 11.9448 7.13823C11.9082 7.23466 11.8548 7.31962 11.7886 7.38686L8.3603 10.8375C8.25807 10.9426 8.12983 11 7.99748 11C7.86514 11 7.7369 10.9426 7.63466 10.8375L4.20641 7.26541C4.08973 7.14414 4.01635 6.96989 4.00242 6.78098C3.98849 6.59207 4.03515 6.40398 4.13213 6.25808C4.22912 6.11219 4.36848 6.02044 4.51957 6.00302C4.67065 5.98561 4.82109 6.04395 4.93777 6.16521L8.00034 9.35864L11.0629 6.27237C11.1468 6.18501 11.2489 6.12952 11.3572 6.11246C11.4655 6.0954 11.5755 6.11749 11.674 6.17611C11.7726 6.23473 11.8557 6.32743 11.9135 6.44325C11.9712 6.55906 12.0012 6.69314 12 6.82962Z"
    />
  </Svg>
);

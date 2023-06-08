import { InnerProps } from 'icons/types';
import * as React from 'react';
import Svg, { Path, SvgXml } from 'react-native-svg';
import Colors from 'theme/colors';

const xmlChevronUp = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 15L12.8321 10.2481C12.4362 9.65434 11.5638 9.65434 11.1679 10.2481L8 15" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="0.2 0.2"/>
</svg>

`;

export const chevronUp = () => (
  <SvgXml xml={xmlChevronUp} width={24} height={24} />
);

export const chevronUp_1 = ({
  width = 16,
  height = 16,
  colour = Colors.mineShaft,
}: InnerProps) => (
  <Svg viewBox="0 0 16 16" width={width} height={height}>
    <Path
      fill={colour}
      d="M4.00004 9.17038C3.99975 9.06365 4.01859 8.9582 4.05517 8.86177C4.09176 8.76534 4.14516 8.68038 4.21145 8.61314L7.6397 5.16252C7.74193 5.05744 7.87017 5 8.00252 5C8.13486 5 8.2631 5.05744 8.36534 5.16252L11.7936 8.73459C11.9103 8.85586 11.9837 9.03011 11.9976 9.21902C12.0115 9.40793 11.9649 9.59602 11.8679 9.74192C11.7709 9.88781 11.6315 9.97956 11.4804 9.99698C11.3293 10.0144 11.1789 9.95605 11.0622 9.83479L7.99966 6.64136L4.93709 9.72763C4.85322 9.81499 4.7511 9.87048 4.64279 9.88754C4.53449 9.9046 4.42454 9.88251 4.32597 9.82389C4.22739 9.76527 4.1443 9.67257 4.08654 9.55675C4.02878 9.44094 3.99876 9.30686 4.00004 9.17038Z"
    />
  </Svg>
);

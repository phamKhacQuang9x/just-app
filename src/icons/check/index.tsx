import { InnerProps } from 'icons/types';
import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xmlCheck = `
<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="6" r="6" fill="#6CCA03"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.67741 4.28981C8.89716 4.50956 8.89716 4.86581 8.67741 5.08556L5.75391 8.00981C5.66991 8.09441 5.56143 8.14925 5.44498 8.1678L5.35641 8.17481C5.20716 8.17481 5.06391 8.11556 4.95816 8.00981L3.53916 6.58931C3.32016 6.36956 3.32016 6.01256 3.53991 5.79356C3.75891 5.57381 4.11591 5.57381 4.33566 5.79356L5.35641 6.81581L7.88241 4.28981C8.10216 4.07006 8.45766 4.07006 8.67741 4.28981Z" fill="#EBEEF2"/>
</svg>
`;

export const check = ({ width, height }: InnerProps) => (
  <SvgXml xml={xmlCheck} width={width} height={height} />
);

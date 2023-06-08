import { InnerProps } from 'icons/types';
import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xmlRoute = `
<svg width="4" height="47" viewBox="0 0 4 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2" cy="6" r="1.5" stroke="#D9D9D9"/>
<rect x="1.5" y="9" width="1" height="29" rx="0.5" fill="#D9D9D9"/>
<circle cx="2" cy="41" r="1.5" stroke="#D9D9D9"/>
</svg>
`;

export const route = ({ width, height }: InnerProps) => (
  <SvgXml xml={xmlRoute} width={width} height={height} />
);

import { InnerProps } from 'icons/types';
import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xmlMinus = `
<svg width="10" height="1" viewBox="0 0 10 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" y1="0.5" x2="9.5" y2="0.500001" stroke="#404040" stroke-linecap="round"/>
</svg>

`;

export const minus = ({ width, height }: InnerProps) => (
  <SvgXml xml={xmlMinus} width={width} height={height} />
);

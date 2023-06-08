import { InnerProps } from 'icons/types';
import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xmlHistory = `
<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.0833 0H3.41667C1.95 0 0.75 1.2 0.75 2.66667V21.3333C0.75 22.8 1.95 24 3.41667 24H22.0833C23.55 24 24.75 22.8 24.75 21.3333V2.66667C24.75 1.2 23.55 0 22.0833 0ZM6.08333 5.33333H8.75V8H6.08333V5.33333ZM6.08333 10.6667H8.75V13.3333H6.08333V10.6667ZM6.08333 16H8.75V18.6667H6.08333V16ZM19.4167 18.6667H11.4167V16H19.4167V18.6667ZM19.4167 13.3333H11.4167V10.6667H19.4167V13.3333ZM19.4167 8H11.4167V5.33333H19.4167V8Z" fill="currentColor"/>
</svg>
`;

export const history = ({ width, height, colour }: InnerProps) => (
  <SvgXml xml={xmlHistory} width={width} height={height} color={colour} />
);

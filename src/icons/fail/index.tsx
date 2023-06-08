import { InnerProps } from 'icons/types';
import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xmlFail = `
<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="23" cy="23" r="22.5" fill="#DE3D22"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.3681 14.3359L23.5003 19.4705L28.6319 14.3359C29.7465 13.2214 31.5495 13.2214 32.6641 14.3359C33.7786 15.4505 33.7786 17.2535 32.6641 18.3681L27.5325 23.5027L32.6633 28.6311C33.7779 29.7457 33.7779 31.5488 32.6633 32.6633C32.1079 33.2225 31.3776 33.5002 30.6472 33.5002C29.9169 33.5002 29.1865 33.2225 28.6311 32.6633L23.5003 27.5348L18.3689 32.6633C17.8135 33.2225 17.0831 33.5002 16.3528 33.5002C15.6224 33.5002 14.8921 33.2225 14.3367 32.6633C13.2221 31.5488 13.2221 29.7457 14.3367 28.6311L19.4681 23.5027L14.3359 18.3681C13.2214 17.2535 13.2214 15.4505 14.3359 14.3359C15.4505 13.2214 17.2535 13.2214 18.3681 14.3359Z" fill="white"/>
</svg>
`;

export const fail = ({ width, height }: InnerProps) => (
  <SvgXml xml={xmlFail} width={width} height={height} />
);

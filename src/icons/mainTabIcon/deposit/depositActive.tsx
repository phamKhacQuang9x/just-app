import { InnerProps } from 'icons/types';
import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xmlDepositActive = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="20" height="20" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_96_1007" transform="scale(0.005)"/>
</pattern>
<image id="image0_96_1007" width="200" height="200" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
`;

export const depositActive = ({ width, height }: InnerProps) => (
  <SvgXml xml={xmlDepositActive} width={width} height={height} />
);

import { InnerProps } from 'icons/types';
import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xmlNote = `
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="30" height="30" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_101_262" transform="scale(0.005)"/>
</pattern>
<image id="image0_101_262" width="200" height="200" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
`;

export const note = ({ width, height }: InnerProps) => (
  <SvgXml xml={xmlNote} width={width} height={height} />
);
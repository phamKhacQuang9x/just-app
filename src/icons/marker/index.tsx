import { InnerProps } from 'icons/types';
import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xmlMarker = `
<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.77286 6.44572C7.99531 6.44572 7.36279 7.07823 7.36279 7.85659C7.36279 8.63414 7.99531 9.26584 8.77286 9.26584C9.55041 9.26584 10.1829 8.63414 10.1829 7.85659C10.1829 7.07823 9.55041 6.44572 8.77286 6.44572ZM8.77299 10.4745C7.32908 10.4745 6.1543 9.30049 6.1543 7.85658C6.1543 6.41187 7.32908 5.23709 8.77299 5.23709C10.2169 5.23709 11.3917 6.41187 11.3917 7.85658C11.3917 9.30049 10.2169 10.4745 8.77299 10.4745Z" fill="#1890FF"/>
<mask id="mask0_3336_18367" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="2" y="1" width="14" height="16">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.125 1.20833H15.4195V16.9205H2.125V1.20833Z" fill="white"/>
</mask>
<g mask="url(#mask0_3336_18367)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.77216 2.41696C5.77316 2.41696 3.33334 4.88014 3.33334 7.90654C3.33334 11.7572 7.86489 15.5088 8.77216 15.7086C9.67944 15.508 14.211 11.7564 14.211 7.90654C14.211 4.88014 11.7712 2.41696 8.77216 2.41696V2.41696ZM8.7722 16.9205C7.32668 16.9205 2.12476 12.4469 2.12476 7.90654C2.12476 4.21298 5.10684 1.20833 8.7722 1.20833C12.4376 1.20833 15.4196 4.21298 15.4196 7.90654C15.4196 12.4469 10.2177 16.9205 8.7722 16.9205V16.9205Z" fill="#1890FF"/>
</g>
</svg>
`;

export const marker = ({ width, height }: InnerProps) => (
  <SvgXml xml={xmlMarker} width={width} height={height} />
);

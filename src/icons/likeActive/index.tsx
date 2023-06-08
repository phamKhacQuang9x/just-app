import { InnerProps } from 'icons/types';
import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xmlLikeActive = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.727 16.6667H3.41663C3.14048 16.6667 2.91663 16.4428 2.91663 16.1667V8.00001C2.91663 7.72387 3.14048 7.50001 3.41663 7.50001H5.72298C6.30842 7.50001 6.85093 7.19284 7.15213 6.69084L9.41079 2.92635C9.89821 2.11408 11.0461 2.03686 11.6379 2.77656C11.9168 3.12522 12.0067 3.58864 11.8784 4.01631L11.0264 6.85634C10.9301 7.17714 11.1704 7.50001 11.5053 7.50001H15.3179C16.4168 7.50001 17.215 8.54501 16.9258 9.60518L15.3349 15.4385C15.1371 16.1637 14.4785 16.6667 13.727 16.6667Z" stroke="#6CCA03" stroke-linecap="round"/>
<path d="M5.83337 16.6667V7.5" stroke="#6CCA03" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

export const likeActive = ({ width, height }: InnerProps) => (
  <SvgXml xml={xmlLikeActive} width={width} height={height} />
);

import { InnerProps } from 'icons/types';
import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xmlEdit = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.46791 0.0285933C7.79363 0.0285933 8.05798 0.292532 8.05798 0.617741C8.05798 0.942951 7.79363 1.20689 7.46791 1.20689H4.52622C2.49324 1.20689 1.18014 2.59728 1.18014 4.74885V11.2797C1.18014 13.4313 2.49324 14.8217 4.52622 14.8217H11.4686C13.5016 14.8217 14.8155 13.4313 14.8155 11.2797V8.11563C14.8155 7.79042 15.0798 7.52648 15.4055 7.52648C15.7312 7.52648 15.9956 7.79042 15.9956 8.11563V11.2797C15.9956 14.1029 14.1758 16 11.4686 16H4.52622C1.81899 16 0 14.1029 0 11.2797V4.74885C0 1.92565 1.81899 0.0285933 4.52622 0.0285933H7.46791ZM14.3203 0.71876L15.2778 1.67475C15.7443 2.13979 16.0008 2.758 16 3.41627C16 4.07455 15.7435 4.69197 15.2778 5.15622L9.36998 11.0548C8.93648 11.4876 8.359 11.7264 7.74532 11.7264H4.79813C4.6392 11.7264 4.48657 11.662 4.37564 11.5481C4.2647 11.435 4.20412 11.2818 4.20806 11.1223L4.28201 8.15381C4.29696 7.56309 4.53535 7.00772 4.9539 6.58903H4.95469L10.8341 0.71876C11.7956 -0.239587 13.3588 -0.239587 14.3203 0.71876ZM10.3498 2.86797L5.78866 7.42248C5.58488 7.62593 5.46923 7.89615 5.46215 8.18287L5.40314 10.5481H7.74532C8.04429 10.5481 8.32438 10.4326 8.53602 10.2213L13.1247 5.63854L10.3498 2.86797ZM11.6681 1.55221L11.1838 2.03452L13.9587 4.80588L14.4438 4.32277C14.6861 4.08083 14.8199 3.75876 14.8199 3.41627C14.8199 3.073 14.6861 2.75014 14.4438 2.5082L13.4863 1.55221C12.9851 1.0534 12.1701 1.0534 11.6681 1.55221Z" fill="#222222"/>
</svg>
`;

export const edit = ({ width, height }: InnerProps) => (
  <SvgXml xml={xmlEdit} width={width} height={height} />
);

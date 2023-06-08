import { InnerProps } from 'icons/types';
import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xmlVoucher = `
<svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.4802 0C21.9717 0 23.9989 2.05486 23.9989 4.57943L24 7.544C24 7.77029 23.9118 7.98971 23.7544 8.14971C23.5981 8.31086 23.3849 8.40114 23.1628 8.40114C22.2843 8.40114 21.5699 9.11886 21.5699 10.0011C21.5699 10.8834 22.2843 11.6011 23.1628 11.6011C23.6249 11.6011 24 11.9851 24 12.4583V15.4206C24 17.9451 21.9728 20 19.4813 20H4.5187C2.02716 20 0 17.9451 0 15.4206V12.4583C0 11.9851 0.37507 11.6011 0.837209 11.6011C1.71572 11.6011 2.43014 10.8834 2.43014 10.0011C2.43014 9.144 1.74474 8.49714 0.837209 8.49714C0.61507 8.49714 0.40186 8.40686 0.245581 8.24571C0.088186 8.08571 0 7.86629 0 7.64L0.00111628 4.57943C0.00111628 2.05486 2.02828 0 4.51981 0H19.4802ZM19.4802 1.71429H14.9012L14.9019 3.90994C14.9019 4.38309 14.5268 4.76709 14.0647 4.76709C13.6025 4.76709 13.2275 4.38309 13.2275 3.90994L13.2268 1.71429H4.51981C2.95144 1.71429 1.67553 3 1.67553 4.57943L1.67442 6.88571C3.08874 7.24114 4.10456 8.48229 4.10456 10.0011C4.10456 11.5349 3.07088 12.8286 1.67442 13.2046V15.4206C1.67442 17 2.95033 18.2857 4.5187 18.2857H13.2268L13.2275 16.5846C13.2275 16.1103 13.6025 15.7274 14.0647 15.7274C14.5268 15.7274 14.9019 16.1103 14.9019 16.5846L14.9012 18.2857H19.4813C21.0497 18.2857 22.3256 17 22.3256 15.4206V13.2046C20.9291 12.8286 19.8954 11.5349 19.8954 10.0011C19.8954 8.46629 20.928 7.17371 22.3256 6.79771L22.3245 4.57943C22.3245 3 21.0486 1.71429 19.4802 1.71429ZM14.0647 6.29086C14.5268 6.29086 14.9019 6.67486 14.9019 7.148V12.6577C14.9019 13.1309 14.5268 13.5149 14.0647 13.5149C13.6025 13.5149 13.2275 13.1309 13.2275 12.6577V7.148C13.2275 6.67486 13.6025 6.29086 14.0647 6.29086Z" fill="#6CCA03"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.33697 11.9999C7.22535 11.9999 7.11454 11.9647 7.01968 11.8956C6.8559 11.7756 6.77563 11.5775 6.8105 11.378L6.9986 10.2942C7.00563 10.254 6.99184 10.2132 6.96212 10.1845L6.16322 9.41697C6.01619 9.27616 5.96349 9.06806 6.02565 8.87482C6.08835 8.67942 6.2543 8.53969 6.45888 8.5105L7.56372 8.35132C7.60642 8.34537 7.64318 8.31916 7.66156 8.28186L8.15533 7.29486C8.24641 7.11297 8.43019 7 8.63505 7C8.83991 7 9.02369 7.11297 9.11477 7.29486L9.60881 8.28159C9.62746 8.31916 9.66394 8.34537 9.70637 8.35132L10.8112 8.5105C11.0158 8.53969 11.1817 8.67942 11.2444 8.87482C11.3066 9.06806 11.2536 9.27616 11.1066 9.41697L10.3077 10.1845C10.278 10.2132 10.2645 10.254 10.2715 10.294L10.4599 11.378C10.4945 11.5777 10.4142 11.7758 10.2501 11.8956C10.0839 12.0174 9.86745 12.0339 9.68394 11.9383L8.69667 11.4266C8.65802 11.4066 8.6118 11.4066 8.57316 11.4266L7.58588 11.9385C7.50697 11.9796 7.42183 11.9999 7.33697 11.9999Z" fill="#6CCA03"/>
</svg>
`;

export const voucher = ({ width = 24, height = 20 }: InnerProps) => (
  <SvgXml xml={xmlVoucher} width={width} height={height} />
);
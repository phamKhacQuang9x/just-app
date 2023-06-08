import { InnerProps } from 'icons/types';
import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xmlFruit = `
<svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.805 12.7237C31.779 12.5814 31.7044 12.4524 31.5939 12.3589C30.5589 11.4833 30.3841 10.5179 30.2437 9.74217L30.2253 9.64111C30.1768 9.37636 29.9642 9.17236 29.6977 9.13486C29.6057 9.12193 29.5083 9.1153 29.4083 9.1153C28.8134 9.1153 27.9754 9.36592 27.4441 9.92574C27.3535 10.0213 27.2953 10.143 27.2779 10.2736C27.2332 10.6095 27.2103 10.9169 27.19 11.188C27.1134 12.21 27.0457 12.3184 26.7344 12.4169C26.5393 12.4786 26.3868 12.6319 26.3261 12.8273C26.0329 13.7712 25.6439 14.6744 25.173 15.5266C24.9404 15.0826 24.6834 14.6832 24.4443 14.3116C23.8593 13.4027 23.3971 12.6847 23.555 11.7949C24.0666 8.91092 23.8069 6.73843 22.7829 5.33768C22.2127 4.55761 21.4003 4.0258 20.4131 3.77736C20.6096 2.24412 21.6751 1.54899 22.2649 1.39093C22.5983 1.30162 22.7962 0.958866 22.7068 0.625429C22.6174 0.292054 22.2747 0.0939916 21.9414 0.183492C20.7236 0.509804 19.4228 1.70774 19.1743 3.62111C18.1768 3.6183 17.2709 3.92293 16.5254 4.51855C15.1631 5.60699 14.3401 7.62961 14.079 10.5301C14.0004 11.4029 13.4358 11.9122 12.6543 12.6169C12.0163 13.1921 11.3057 13.8344 10.7364 14.8053C10.0274 14.5165 9.26675 14.3292 8.4725 14.2614C8.69763 12.7894 9.73294 12.1173 10.3113 11.9624C10.6448 11.873 10.8426 11.5303 10.7533 11.1969C10.6639 10.8635 10.3211 10.6655 9.98781 10.755C9.67375 10.8391 9.35431 10.9819 9.04862 11.1793C8.90644 10.4775 8.56244 9.81924 8.04156 9.29842C7.34369 8.60055 6.41575 8.21624 5.42875 8.21624C5.10569 8.21624 4.78394 8.25842 4.47237 8.34155C4.25631 8.39924 4.0875 8.56805 4.02981 8.78411C3.69025 10.0557 4.05688 11.4234 4.98663 12.3533C5.63356 13.0002 6.4785 13.3771 7.38475 13.4288C7.30575 13.6874 7.247 13.9627 7.21287 14.2545C3.18481 14.5572 0 17.9312 0 22.0352C0 26.3376 3.50031 29.8379 7.80269 29.8379C9.40169 29.8379 10.9248 29.3627 12.2288 28.4612C12.4341 28.5513 12.6402 28.638 12.8472 28.7197C14.7282 29.4616 16.6292 29.8379 18.4972 29.8379C21.502 29.8379 24.2908 28.8561 26.562 26.9987C28.9359 25.0572 30.6856 22.1845 31.6216 18.6912C31.927 17.5518 32.1964 14.8672 31.805 12.7237ZM13.4914 13.5452C14.3321 12.7871 15.2014 12.0032 15.324 10.6422C15.5533 8.09443 16.22 6.36268 17.3057 5.49524C17.9502 4.9803 18.7468 4.78174 19.6737 4.90561C20.5891 5.0278 21.2957 5.42136 21.7739 6.07549C22.5889 7.19036 22.7741 9.04124 22.3242 11.5766C22.0806 12.9492 22.7479 13.9857 23.3931 14.9882C23.7548 15.55 24.127 16.1294 24.3801 16.8036C22.2737 19.8455 19.0774 22.0638 15.5603 22.8761C15.5903 22.5972 15.6056 22.3163 15.6056 22.0352C15.6056 19.2159 14.1024 16.741 11.8555 15.3697C12.3231 14.6001 12.9153 14.0649 13.4914 13.5452ZM5.87038 11.4694C5.34531 10.9442 5.09169 10.2079 5.16831 9.47992C5.25469 9.4708 5.3415 9.46611 5.42863 9.46611C6.08169 9.46611 6.69575 9.72042 7.1575 10.1822C7.68262 10.7073 7.93631 11.4437 7.85962 12.1716C7.77331 12.1807 7.68644 12.1854 7.5995 12.1854H7.59937C6.94613 12.1854 6.33213 11.9311 5.87038 11.4694ZM7.80269 28.5879C4.1895 28.5879 1.25 25.6484 1.25 22.0352C1.25 18.4219 4.1895 15.4824 7.80269 15.4824C11.4159 15.4824 14.3555 18.4219 14.3555 22.0352C14.3555 22.3954 14.3261 22.755 14.2679 23.1089C13.8658 23.1607 13.461 23.1937 13.0543 23.2075C13.1399 22.8242 13.1847 22.4325 13.1847 22.0352C13.1847 21.3313 13.0492 20.6442 12.7822 19.993C12.6512 19.6737 12.2863 19.5209 11.9668 19.6519C11.6474 19.7829 11.4947 20.148 11.6257 20.4674C11.8308 20.9673 11.9347 21.4947 11.9347 22.0352C11.9347 22.4282 11.879 22.8142 11.7701 23.188C10.8756 23.1305 9.97981 22.9827 9.09719 22.7462C8.91744 22.698 8.72544 22.7325 8.57362 22.8402C8.01812 23.2346 7.45825 23.7307 7.12625 24.6818C7.04069 24.9269 7.11556 25.1994 7.31437 25.3664C8.4625 26.3309 9.66206 27.1484 10.8977 27.8121C9.95188 28.3215 8.89875 28.5879 7.80269 28.5879ZM30.4142 18.3677C28.6994 24.7673 24.2445 28.5879 18.4973 28.5879C15.1422 28.5879 11.6006 27.2124 8.47906 24.7055C8.6445 24.4085 8.84906 24.204 9.06888 24.0295C10.2425 24.3191 11.436 24.4657 12.6212 24.4657C15.9755 24.4657 19.2098 23.3227 21.9744 21.1601C23.38 20.0607 24.5982 18.7359 25.574 17.2669C25.5856 17.2511 25.5966 17.2349 25.6066 17.2181C26.3769 16.0494 26.9939 14.7902 27.4291 13.4809C28.305 13.0401 28.3718 12.1474 28.4366 11.2814C28.4514 11.0834 28.4666 10.8804 28.4898 10.6662C28.6561 10.5459 28.8764 10.4505 29.0972 10.4015C29.2638 11.1962 29.5877 12.2163 30.6111 13.1582C30.9007 14.9996 30.6904 17.3367 30.4142 18.3677Z" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="2.10732" y1="1.82673" x2="29.5411" y2="34.5758" gradientUnits="userSpaceOnUse">
<stop stop-color="#6CCA03"/>
<stop offset="1" stop-color="#0E8AE9"/>
</linearGradient>
</defs>
</svg>

`;

export const fruit = ({ width, height }: InnerProps) => (
  <SvgXml xml={xmlFruit} width={width} height={height} />
);

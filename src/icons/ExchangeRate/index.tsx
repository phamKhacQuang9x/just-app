import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xmlExchangeRate = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.3077 14.8077C16.7376 14.8077 16.2044 14.5272 15.8814 14.0574L15.0345 12.8255C14.0368 14.6144 12.1402 15.7692 10 15.7692C7.01361 15.7692 4.54986 13.4881 4.2594 10.5769H4.80772C5.02193 10.5769 5.21857 10.4582 5.3183 10.2686C5.41803 10.079 5.40447 9.84968 5.28311 9.67315L4.44209 8.44988L3.16772 6.59621C3.06014 6.43969 2.88233 6.34613 2.69233 6.34613C2.66858 6.34613 2.64502 6.34758 2.62174 6.35043C2.59846 6.35328 2.57553 6.35758 2.55299 6.36316C2.49667 6.37719 2.44292 6.39957 2.39358 6.42945C2.32452 6.47125 2.26397 6.52769 2.2169 6.59617L0.101514 9.67312C-0.0198525 9.84964 -0.0334072 10.079 0.0663192 10.2685C0.166046 10.4581 0.362686 10.5769 0.576943 10.5769H1.17225C1.30952 12.7227 2.21081 14.7211 3.74487 16.2552C5.41568 17.926 7.63713 18.8462 10 18.8462C12.3629 18.8462 14.5843 17.926 16.2552 16.2552C16.6993 15.811 17.0927 15.3238 17.4303 14.8029C17.3896 14.8058 17.3488 14.8077 17.3077 14.8077Z" fill="#57CC99"/>
<path d="M10.4397 9.42305H9.56063C9.39399 9.42305 9.25844 9.28751 9.25844 9.12087V8.6813C9.25844 8.5147 9.39399 8.37915 9.56063 8.37915H10.4397C10.6064 8.37915 10.7419 8.5147 10.7419 8.6813C10.7419 8.99993 11.0002 9.25821 11.3188 9.25821C11.6374 9.25821 11.8958 8.99989 11.8958 8.6813C11.8958 7.92482 11.3158 7.30142 10.577 7.23197V6.9231C10.577 6.60447 10.3187 6.34619 10.0001 6.34619C9.68149 6.34619 9.42321 6.60451 9.42321 6.9231V7.23197C8.68453 7.30142 8.10449 7.92482 8.10449 8.6813V9.12087C8.10449 9.92375 8.75766 10.5769 9.56055 10.5769H10.4397C10.6063 10.5769 10.7418 10.7125 10.7418 10.8791V11.3187C10.7418 11.4853 10.6063 11.6209 10.4397 11.6209H9.56055C9.39391 11.6209 9.25836 11.4853 9.25836 11.3187C9.25836 11.0001 9.00004 10.7418 8.68145 10.7418C8.36285 10.7418 8.10453 11.0001 8.10453 11.3187C8.10453 12.0752 8.68453 12.6986 9.42325 12.768V13.0769C9.42325 13.3955 9.68157 13.6538 10.0002 13.6538C10.3188 13.6538 10.5771 13.3955 10.5771 13.0769V12.768C11.3157 12.6985 11.8958 12.0752 11.8958 11.3187V10.8791C11.8958 10.0762 11.2426 9.42305 10.4397 9.42305Z" fill="#57CC99"/>
<path d="M19.9333 9.73143C19.8336 9.54182 19.637 9.42307 19.4227 9.42307H18.8274C18.6901 7.27734 17.7888 5.2789 16.2548 3.7448C14.584 2.07402 12.3625 1.15387 9.99967 1.15387C7.63683 1.15387 5.41531 2.07402 3.74453 3.74484C3.30035 4.18902 2.90703 4.67629 2.56934 5.1971C2.61 5.19421 2.65086 5.19234 2.69199 5.19234C3.26211 5.19234 3.79527 5.47281 4.1182 5.94257L4.96515 7.17452C5.96284 5.38566 7.85944 4.23082 9.99963 4.23082C12.986 4.23082 15.4498 6.51191 15.7402 9.42311H15.1919C14.9777 9.42311 14.7811 9.54182 14.6813 9.73147C14.5816 9.92108 14.5952 10.1504 14.7165 10.3269L15.5576 11.5502L16.8319 13.4038C16.8588 13.443 16.8901 13.4782 16.9249 13.509C17.0292 13.6013 17.1649 13.6539 17.3074 13.6539C17.4973 13.6539 17.6752 13.5604 17.7828 13.4038L18.5466 12.2928L19.8981 10.3269C20.0195 10.1503 20.0331 9.921 19.9333 9.73143Z" fill="#57CC99"/>
</svg>

`;

export const exchangeRate = () => (
  <SvgXml xml={xmlExchangeRate} width={24} height={24} />
);
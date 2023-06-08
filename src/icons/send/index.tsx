import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xmlSend = `
<svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.0503 13.1115L24.0503 13.1115C24.2457 12.7958 24.3411 12.4283 24.324 12.0574C24.307 11.6865 24.1782 11.3294 23.9547 11.0329C23.7462 10.7564 23.4642 10.5447 23.1417 10.4213L4.81105 2.27094C4.81104 2.27094 4.81104 2.27093 4.81103 2.27093C4.48234 2.12478 4.11805 2.07805 3.76312 2.13651L3.95386 3.29459L3.76312 2.13651C3.40817 2.19497 3.07811 2.35607 2.81365 2.59992C2.54919 2.84377 2.36191 3.15971 2.27491 3.50876C2.18791 3.8578 2.20499 4.22469 2.32407 4.56414L2.32464 4.56576L4.53644 10.8435L4.77872 11.5312L5.49655 11.6588L8.41676 12.1781L5.47397 12.7002L4.75278 12.8282L4.51188 13.5199L2.32729 19.7924C2.3269 19.7935 2.32651 19.7946 2.32613 19.7957C2.20698 20.135 2.18975 20.5019 2.27661 20.8509C2.36376 21.2011 2.55184 21.518 2.81747 21.7623C3.08311 22.0065 3.41464 22.1673 3.7709 22.2248L3.77092 22.2248C4.12677 22.2823 4.49166 22.234 4.82038 22.0861C4.82073 22.086 4.82109 22.0858 4.82144 22.0856L23.2292 13.8269C23.2305 13.8263 23.2318 13.8257 23.2331 13.8251C23.5709 13.6747 23.8557 13.4261 24.0503 13.1115Z" fill="#6CCA03" stroke="#6CCA03" stroke-width="2.5"/>
</svg>
`;

export const send = () => <SvgXml xml={xmlSend} width={24} height={24} />;

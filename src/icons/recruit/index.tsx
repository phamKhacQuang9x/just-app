import { InnerProps } from 'icons/types';
import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xmlRecruit = `
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="48" height="48" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_134_634" transform="scale(0.00869565)"/>
</pattern>
<image id="image0_134_634" width="115" height="115" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAABzCAMAAACcnc3UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJENUY5N0ZENDVCMzExRTY4MkZDOTYxMTlBNDk1MDMzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJENUY5N0ZFNDVCMzExRTY4MkZDOTYxMTlBNDk1MDMzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkQ1Rjk3RkI0NUIzMTFFNjgyRkM5NjExOUE0OTUwMzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkQ1Rjk3RkM0NUIzMTFFNjgyRkM5NjExOUE0OTUwMzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6zBfY6AAABgFBMVEU+tP+i2/+s3/8trf8qrP9sxv9nxP+N0//K6v+m3P9Uvf+95v9Yvv/3/P9Ou/+x4P/R7f8Nof+J0f/N7P8So//U7v8Wpf9av/8iqf8Gnv8KoP84sv/y+v81sf9Muv93yv/G6f+65P+X1/9+zf9ewP8Env8In//7/f9JuP8Dnf8UpP9Btf/u+P9mxP+k3P+d2f8apv+Q1P/1+/8mq//o9v/e8v+Czv98zP/F6P8fqP/g8/+a2P/I6v/r9/9Luf/S7v90yf/A5/87s//b8f9iwv8dp//Y8P/4/P/9/v9zyf+Ez/9dwP/+///Z8P9Ft/8lqv/W7/9Gt/9yyP/c8f9cwP/i9P9SvP+u4P/m9f8Zpv9wx/+24/+14v/j9P+44/9rxv+v4P9Etv/8/v/x+v/5/f/w+f9Wvf88s/8BnP9pxf8Pov/M6/8orP+f2v+V1v/n9v/s+P+G0P+P1P+Z1/8zsP9kw/9xyP95y//d8v/D6P9Xvv+U1f+T1f////8AnP////8px81aAAAAgHRSTlP/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ADgFS2cAAAVYSURBVHjaxJv5Q+JGFMeHQ8OxIBEkiBRUBAHbAmpbUdeqe6AiSkFAUFQ867rrblt7d8Z/vQiiuUwyIWG+v5AJYz5MJs57894LuMeSw1Wl6jZgTtERFKFTZmCrU1WXA+8iQHnX8knY6UNi8jnDJ2XtmRaqUkNSqlUoi5bMQjroR/LyB9MFjZiH1xmkVJnrw96ZWastjnAUt1mzvTGtToQvp7UH5hGD1Ik5UsnMh7xIrbyhvBqmAaBeBAzYzFLRj3qTv1jCYx7EUO+KHeAwJ+eQFpqbVMwMhKNIG0XDAWXMxjHSTscNJcz8FNJSU3l5ZuEV0lavCnLMvNbIFjQvzWxMIe011ZBiBo6RHjoOSDDDSB+FX2ZORnViRidfYh7MIb00dyDOLMWQfoqVRJlFpKeKYkyDX1em3yBk5gHSVyAvYIaQ3grxmUde3ZneIx6TQfqL4TKtqB+ysplZZ1+YziyL2Z9hdgfaYdr6xLQ9Mw/jfWLGD5+Y16hfuu4yC5m+MTOFR2Za1vwlvCx5XpiJaKgwv9/R58Xbd+Kd0o/MoAyy+ck98qzCctokihyGbxbGO1pwQ7tH9FrBDtMiY1CYC8jT4pVIN9PFzcfRaEejiSQU9+b8ljaTkkb6voM3A8xeVwwTakA7Lex3BbdYrRX4gtGg2syKNPMSXvDuJQO/rLOaP3c+voLfc5gD4perPDDLNZnHG97wpsY3Pct+BLzAGdvZAX9AY7O586iZLbg01jm841qsWrnFPEGyzAT3zO45h+mxDUEpvf9mlP3XJy2mnE+bg+M8FzSRDcxwTkRW3uZyrZnOPWuP2Xs8Ki7A4QjH1wX3YibFs3K9utlR3Qgb4eImS8VfTh1L9c7x6ubgjJxT7ElC9iPjvAcOYdjQv1qand541Ok2hBtcPZw57Tamz9yMzHJde2NnPw0O4BL+LiPE0wYlM1TjF3bLBar8DpEliC0Z1/jTGbtVBYIVYWcDn/nZLMlMcpgUqAt+FFShuuRm5ccAu1kHAhfBpYa5NCq1V3FMcJwFIHDfF9Uwq7QE86fsW45DDwQzUVbDHJJmDrKbZpDSZJw4zBSg+z5OGkT4Pfb1ZkaEO8BQ6xKOaeU4xzmEX0tud3hMJBynubWcDl9uDbn4LknJbn/NOzVvsf4QPIBwJINwxim4KWMtZnKdRp67SthYyD5df8RE07Fn6JnbEAqa/CjRHG+ZyF2EM58pMSa8KK39+7uJjqbMzvDQX+07ffvw5XL7bo5YV5sfvaOe9XpyYTEAMZkp4f9nm9k2F7Pzf/+XMyUSHl9w63CfevB7JkrGP5spT8I7Npi0vHZ0u2IxzcJ16InZnbO1X6fufLT/Q4sZ90Q9u2Dwt2XeXGMxgXC95TPbKk9QbVfv8nZtXszlkWY6BrnrbV0R82EZlzAAWOOsC+3nS0x7y3RkFtUwGfgP135WlTI3JijKta2CGa1Oz3H9BJdSpqQLu4viPpNZVFdWGI5z/SGB36eS6bWcZsV0Dh3DnE1Yy+8T+LcqmfTAlriKY7zgiYgfr5KJEbMW7lf0Zp6I7Mt0Zrb3Zfz9pyqm8qh6RWyfrTOTEosnmBz4TPc7xeFqi1jcxDuCzzQqTpIEReND8TA2clt5xistHgerWXCZ3ypOHzzFwfjxvt0JPGQygR/vE8Q1P+SMrvx7ZXIbgsozXqy4Jon4LZE4NYl4PIm8A5H8CpE8Eol8GZG8IIn8J5E8L5F8Nom8PZH6BCJ1GETqTUjU1RCpHyJSJ0WkHoxI3RuR+j4idYxk6jWJ1KUSqb8lU2dMpJ6aTN04mfp4Iu8BEHrfgcx7HYTeX9HyPZ3/BRgAJ+UPB+r0wrMAAAAASUVORK5CYII="/>
</defs>
</svg>
`;

export const recruit = ({ width, height }: InnerProps) => (
  <SvgXml xml={xmlRecruit} width={width} height={height} />
);
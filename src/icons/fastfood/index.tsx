import { InnerProps } from 'icons/types';
import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xmlFastFood = `
<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="52" height="52" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_134_633" transform="scale(0.00869565)"/>
</pattern>
<image id="image0_134_633" width="115" height="115" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAABzCAYAAACrQz3mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkVEQUVFREE4MDc3MTFFOTk3NEJCQTg4QjBDNjBDQkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkVEQUVFREI4MDc3MTFFOTk3NEJCQTg4QjBDNjBDQkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RkMzRUYwOTgwNUYxMUU5OTc0QkJBODhCMEM2MENCQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RkMzRUYwQTgwNUYxMUU5OTc0QkJBODhCMEM2MENCQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoriJjgAABOnSURBVHja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"/>
</defs>
</svg>
`;

export const fastfood = ({ width, height }: InnerProps) => (
  <SvgXml xml={xmlFastFood} width={width} height={height} />
);

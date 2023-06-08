import { ColorValue } from 'react-native';

export interface Props {
  colour?: ColorValue;
  stroke?: string;
  size?: number;
  iconName: string;
  disabled?: boolean;
  width?: number;
  height?: number;
}

export interface OuterProps {
  colour: ColorValue;
  fill: ColorValue;
  stroke?: string;
  width: number;
  height: number;
}

export interface InnerProps {
  colour: ColorValue;
  fill: ColorValue;
  stroke?: string;
  width: number;
  height: number;
}

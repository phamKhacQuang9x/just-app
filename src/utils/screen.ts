import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Screen = {
  height,
  width,
};

export default Screen;
export const FontFamily = {
  Mulish: 'Mulish-Regular',
  MulishBold: 'Mulish-Bold',
  System: 'System',
};

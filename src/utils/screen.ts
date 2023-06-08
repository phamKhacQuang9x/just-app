import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Screen = {
  height,
  width,
};

export default Screen;

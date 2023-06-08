import { Edge } from 'react-native-safe-area-context';
import Platform from 'utils/platform';

export const CONTENT_STYLE = Platform.isAndroid
  ? {
      // paddingTop: Screen.statusBarH,
      // marginTop: (Screen.statusBarH || 0) * 2,
    }
  : {};

export const SAFE_AREA_EDGES: Edge[] = Platform.isAndroid
  ? []
  : ['left', 'right'];

export const HEADER_TRANSLUCENT = Platform.isAndroid ? false : false;

export const disableGestureScreen = {
  gestureEnabled: false,
};

export const hideHeaderScreen = {
  gestureEnabled: false,
};

export const headerTranslucent = {
  headerTranslucent: HEADER_TRANSLUCENT,
};

export const headerTranslucentWithDisableGestureScreen = {
  headerTranslucent: HEADER_TRANSLUCENT,
  gestureEnabled: false,
};

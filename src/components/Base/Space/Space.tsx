import React, { memo } from 'react';
import { View } from 'react-native';

export interface PropTypes {
  height?: number | string;
  width?: number | string;
  colors?: string;
}

const Space: React.FC<PropTypes> = memo(
  ({ height = 10, width = 0, colors = 'transparent' }) => {
    return <View style={{ height, width, backgroundColor: colors }} />;
  },
);

export default memo(Space);

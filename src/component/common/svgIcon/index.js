import React from 'react';
import { TouchableOpacity } from 'react-native';

const SvgIcon = ({ svgFile, ...props }) => {
  return <TouchableOpacity {...props}>{svgFile}</TouchableOpacity>;
};

export default SvgIcon;

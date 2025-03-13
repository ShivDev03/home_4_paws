import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

const Icon = ({ source, ImageStyle, onPress, activeOpacity }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} activeOpacity={activeOpacity}>
        <Image source={source} style={ImageStyle} />
      </TouchableOpacity>
    </View>
  );
};

export default Icon;

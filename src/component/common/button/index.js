import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import style from './style';
import UseColors from '../../../theme/useColors';

const Button = ({ buttonName, onPress, buttonStyle, buttonTextStyle }) => {
  const { themeColors } = UseColors();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        style.generatorButtonStyle,
        {
          backgroundColor: themeColors.selectedTabIconColor,
        },
        buttonStyle,
      ]}
    >
      <Text
        style={[
          style.generatorTextStyle,
          {
            color: themeColors.screenBackground,
          },
          buttonTextStyle,
        ]}
      >
        {buttonName}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

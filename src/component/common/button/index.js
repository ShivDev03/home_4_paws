import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import style from './style';
import UseColors from '../../../theme/useColors';
import {colors} from '../../../utils/colors';

const Button = ({ buttonName, onPress, buttonStyle, buttonTextStyle }) => {
  const { themeColors } = UseColors();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        style.generatorButtonStyle,
        {
          backgroundColor: colors.DodgerBlue,
        },
        buttonStyle,
      ]}
    >
      <Text
        style={[
          style.generatorTextStyle,
          {
            color: colors.black,
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

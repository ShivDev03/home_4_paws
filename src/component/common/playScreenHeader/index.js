import React from 'react';
import { Text, View } from 'react-native';

import BackArrowIcon from '@assets/icons/svgIcons/backArrowIcon';
import { SvgIcon } from '@component/index';
import { useNavigation } from '@react-navigation/native';

import style from './style';
import UseColors from '../../../theme/useColors';

const PlayScreenHeader = () => {
  const { themeColors } = UseColors();
  const { goBack } = useNavigation();
  return (
    <View style={style.container}>
      <SvgIcon svgFile={<BackArrowIcon />} onPress={goBack} />
      <Text style={[style.textHeadingStyle, { color: themeColors.blackTextColor }]}>AI Voice</Text>
      <View />
    </View>
  );
};
export default PlayScreenHeader;

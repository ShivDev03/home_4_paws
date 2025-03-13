import React from 'react';
import { Text, View } from 'react-native';

import style from './style';
import UseColors from '../../../theme/useColors';

const HistoryHeader = () => {
  const { themeColors } = UseColors();
  return (
    <View style={style.container}>
      <Text style={[style.headerTextStyle, { color: themeColors.blackTextColor }]}>History</Text>
    </View>
  );
};
export default HistoryHeader;

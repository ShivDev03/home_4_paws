import React from 'react';
import { SafeAreaView } from 'react-native';

import { HistoryHeader, HistoryList } from '../../component/';

import style from './style';
import UseColors from '../../theme/useColors';

const History = () => {
  const { themeColors } = UseColors();
  return (
    <SafeAreaView style={[style.container, { backgroundColor: themeColors.screenBackground }]}>
      <HistoryHeader />
      <HistoryList />
    </SafeAreaView>
  );
};

export default History;

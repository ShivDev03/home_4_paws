import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import { fontFamily } from '@utils/helper';

import style from './style';
import UseColors from '../../../theme/useColors';

const TextSelection = () => {
  const { themeColors } = UseColors();
  const [visible, setVisible] = useState(false);
  const [mainTextSelection, setMainTextSelection] = useState(null);
  const [subTextSelection, setSubTextSelection] = useState(null);
  const renderItem = (item) => {
    return (
      <TouchableOpacity
        style={[
          style.mainTextContainerViewStyle,
          { backgroundColor: mainTextSelection === item.index ? themeColors.selectedTabIconColor : themeColors.screenBackground },
        ]}
        onPress={() => {
          setVisible(true);
          setMainTextSelection(item.index);
        }}
      >
        <Text
          style={{
            color: mainTextSelection === item.index ? themeColors.screenBackground : themeColors.blackTextColor,
            fontFamily: fontFamily.poppinsMedium,
            fontSize: 12,
          }}
        >
          Happy Birthday
        </Text>
      </TouchableOpacity>
    );
  };
  const secondRenderList = (item) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSubTextSelection(item.index);
        }}
        style={[
          style.textContainerViewStyle,
          { backgroundColor: subTextSelection === item.index ? themeColors.selectedTabIconColor : themeColors.screenBackground },
        ]}
      >
        <Text
          style={{
            color: subTextSelection === item.index ? themeColors.screenBackground : themeColors.blackTextColor,
            fontFamily: fontFamily.poppinsMedium,
            fontSize: 14,
          }}
        >
          Wishing you a day filled with joy, laughter, and wonderful moments. May this year bring you success, happiness
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={style.container}>
      <Text style={[style.textHeadingStyle, { color: themeColors.blackTextColor }]}>Select Text Inspiration</Text>
      <FlatList showsHorizontalScrollIndicator={false} style={style.flatListStyle} horizontal data={[...Array(10)]} renderItem={renderItem} />
      {visible && <FlatList data={[...Array(5)]} renderItem={secondRenderList} style={style.secondFlatlistStyle} />}
    </View>
  );
};
export default TextSelection;

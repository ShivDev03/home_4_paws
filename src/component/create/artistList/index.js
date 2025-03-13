import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

import { icons } from '@assets/index';
import { fontFamily } from '@utils/helper';

import style from './style';
import UseColors from '../../../theme/useColors';

const ArtistList = () => {
  const { themeColors } = UseColors();
  const [selectedButton, setSelectedButton] = useState(null);
  const renderItem = (item) => {
    return (
      <View style={style.listViewStyle}>
        <TouchableOpacity
          onPress={() => {
            setSelectedButton(item.index);
          }}
        >
          <Image
            source={icons.user}
            style={{
              height: 60,
              width: 60,
              borderRadius: 100,
              resizeMode: 'center',
              borderWidth: selectedButton === item.index ? 2 : 0,
              borderColor: themeColors.selectedTabIconColor,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: selectedButton === item.index ? themeColors.selectedTabIconColor : themeColors.blackTextColor,
            fontFamily: fontFamily.inter,
            fontSize: 12,
          }}
        >
          Modi
        </Text>
      </View>
    );
  };
  return (
    <View style={style.container}>
      <View style={style.textContainer}>
        <Text style={style.selectVoiceTextStyle}>Select Voice</Text>
        <TouchableOpacity>
          <Text
            style={[
              style.seeAllTextStyle,
              {
                color: themeColors.selectedTabIconColor,
              },
            ]}
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList showsHorizontalScrollIndicator={false} style={style.flatListStyle} data={[...Array(15)]} horizontal={true} renderItem={renderItem} />
      <TouchableOpacity
        style={[
          style.generatorButtonStyle,
          {
            backgroundColor: themeColors.selectedTabIconColor,
          },
        ]}
      >
        <Text
          style={[
            style.generatorTextStyle,
            {
              color: themeColors.screenBackground,
            },
          ]}
        >
          Generator
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ArtistList;

import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

import BluePlayBack from '@assets/icons/svgIcons/bluePlayBack';
import DeleteIcon from '@assets/icons/svgIcons/deleteIcon';
import ShareIcon from '@assets/icons/svgIcons/shareIcon';
import Threedot from '@assets/icons/svgIcons/threedot';
import { icons } from '@assets/index';
import { Icon, SvgIcon } from '@component/index';
import { navigate } from '@navigation/navigationsServices';
import checkAndRequestMultiplePermissions, { PERMISSION_DATA } from '@services/permissionManager';
import { DUMMY_VOICE, HISTORY_TEXT, screenName } from '@utils/enum';
import { hp, wp } from '@utils/helper';
import TrackPlayer, { Capability } from 'react-native-track-player';

import style from './style';
import UseColors from '../../../theme/useColors';

const HistoryList = () => {
  const { themeColors } = UseColors();
  const [isControllView, setIsControllView] = useState(false);
  const [matchIndex, setMatchIndex] = useState(null);

  const renderItem = (item) => {
    return (
      <View key={item.index} style={{ marginHorizontal: wp(20) }}>
        <View style={[style.listMainViewStyle, { marginBottom: isControllView && matchIndex === item.index ? hp(40) : hp(15) }]} key={item.index}>
          <View style={style.imageAndTextStyle}>
            <View style={style.imageViewStyle}>
              <Image source={{ uri: item?.item?.personId?.thumbnail }} style={style.userImageListStyle} />
            </View>
            <Text numberOfLines={2} style={[style.textStyle, { color: themeColors.blackTextColor }]}>
              {item?.item.text.length > 60 ? `${item?.item.text.slice(0, 60)}...` : item?.item.text}
            </Text>
          </View>
          <View />
          <TouchableOpacity
            style={style.threeDotButtonStyle}
            onPress={() => {
              setIsControllView(true);
              setMatchIndex(item.index);
            }}
          >
            <Threedot />
          </TouchableOpacity>
        </View>
        {isControllView && matchIndex === item.index && (
          <View style={style.buttonContainerView}>
            <SvgIcon
              svgFile={<BluePlayBack />}
              onPress={async () => {
                navigate(screenName.PLAY_SCREEN, { data: item });

                await TrackPlayer.add(DUMMY_VOICE);
                await TrackPlayer.skip(item.index);
                await TrackPlayer.play();
              }}
            />
            <SvgIcon svgFile={<ShareIcon />} />
            <SvgIcon svgFile={<DeleteIcon />} />
          </View>
        )}
      </View>
    );
  };
  return (
    <View style={style.container}>
      <FlatList data={DUMMY_VOICE} renderItem={renderItem} />
    </View>
  );
};
export default HistoryList;

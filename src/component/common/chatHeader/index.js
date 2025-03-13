import React from 'react';
import { Text, View } from 'react-native';

import BackArrowIcon from '@assets/icons/svgIcons/backArrowIcon';
import ThreeDot from '@assets/icons/svgIcons/threedot';
import { icons } from '@assets/index';
import { Icon, SvgIcon } from '@component/index';
import { useNavigation } from '@react-navigation/native';

import style from './style';

const ChatHeader = () => {
  const { goBack } = useNavigation();
  return (
    <View style={style.container}>
      <View style={style.userContainer}>
        <SvgIcon onPress={goBack} style={{ marginRight: 20 }} svgFile={<BackArrowIcon />} />

        <Icon source={icons.userPhoto} ImageStyle={style.userImageStyle} />
        <View style={{ marginLeft: 10 }}>
          <Text style={style.userTextNameStyle}>Tom Holand</Text>
          <Text>Online</Text>
        </View>
      </View>

      <View>
        <SvgIcon svgFile={<ThreeDot />} />
      </View>
    </View>
  );
};
export default ChatHeader;

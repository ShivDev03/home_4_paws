import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import DrawerIcon from '@assets/icons/svgIcons/drawerIcon';
import KingIcon from '@assets/icons/svgIcons/kingIcon';
import StarIcon from '@assets/icons/svgIcons/starIcon';
import { navigate } from '@navigation/navigationsServices';
import { screenName } from '@utils/enum';

import style from './style';
import UseColors from '../../../theme/useColors';

const EnhanceHeader = () => {
  const { themeColors } = UseColors();
  return (
    <View style={style.container}>
      <View style={style.drawerContainer}>
        <TouchableOpacity
          activeOpacity={1}
          style={[
            style.drawerButtonStyle,
            {
              backgroundColor: themeColors.screenBackground,
            },
          ]}
        >
          <DrawerIcon iconColor={themeColors.selectedTabIconColor} />
        </TouchableOpacity>
        <Text
          style={[
            style.voiceCloneTextStyle,
            {
              color: themeColors.selectedTabIconColor,
            },
          ]}
        >
          Voice Clone
        </Text>
      </View>
      <View style={style.premiumContainer}>
        <TouchableOpacity style={[style.starPointButtonStyle, { backgroundColor: themeColors.selectedTabIconColor }]}>
          <StarIcon />
          <Text style={[style.starPointTextStyle, { color: themeColors.screenBackground }]}>27</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[style.premiumButtonStyle, { backgroundColor: themeColors.premiumIconColor }]}
          onPress={() => {
            navigate(screenName.PREMIUM);
          }}
        >
          <KingIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default EnhanceHeader;

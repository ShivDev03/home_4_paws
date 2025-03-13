import React, { useMemo, useState } from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';

import RightIcon from '../../assets/icons/svgIcons/rightIcon';
import { image } from '../../assets/index';
import { colors } from '../../utils/colors';
import { PREMIUM_DETAILS } from '../../utils/enum';
import {  screenWidth } from '../../utils/helper';
import { LinearGradient } from 'react-native-linear-gradient';

import style from './style';

const Premium = () => {
  return (
    <View style={[style.container, { backgroundColor: colors.white }]}>
      <ImageBackground style={{ width: screenWidth, height: 475, position: 'absolute' }} source={image.premiumBackground}>
        <LinearGradient colors={['rgba(7,7,7,0)', '#ffffff']} style={{ height: '100%', width: '100%' }} />
      </ImageBackground>

      <Text style={style.firstLineHeadingStyle}>Get Full Access</Text>
      <View style={style.headingTextView}>
        <Text style={style.secondToLineHeadingStyle}>To</Text>
        <Text style={style.secondLineHeadingStyle}> Premium Features</Text>
      </View>
      <View style={style.detailMainView}>
        {PREMIUM_DETAILS.map((item) => {
          return (
            <View style={style.detailSubView}>
              <View style={style.rightIconStyle}>
                <RightIcon />
              </View>
              <Text style={style.textStyle}>{item}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Premium;

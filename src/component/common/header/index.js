import React from 'react';
import { View } from 'react-native';

import { icons } from '../../../assets/index';
import { useNavigation } from '@react-navigation/native';

import style from './style';
import Icon from '../icon';

const Header = () => {
  const { goBack } = useNavigation();
  return (
    <View style={style.container}>
      <Icon
        source={icons.back}
        onPress={() => {
          goBack();
        }}
        ImageStyle={style.imageStyle}
      />
    </View>
  );
};

export default Header;

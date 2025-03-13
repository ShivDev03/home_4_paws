import { StyleSheet } from 'react-native';

import { fontFamily, hp, wp } from '../../../utils/helper';

const style = StyleSheet.create({
  generatorButtonStyle: {
    width: wp(207),
    height: hp(37),
    borderRadius: 31,
    justifyContent: 'center',
    alignItems: 'center',
  },
  generatorTextStyle: {
    fontSize: 15,
    fontFamily: fontFamily.inter,
    fontWeight: 'bold',
    lineHeight: 18.5,
  },
});

export default style;

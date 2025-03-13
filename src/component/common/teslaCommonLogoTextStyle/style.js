import { StyleSheet } from 'react-native';

import { fontSize, hp } from '@utils/helper';

const style = StyleSheet.create({
  teslaLogoTextStyle: {
    fontSize: fontSize(25),
    alignSelf: 'center',
    marginTop: hp(50),
  },
  subtitleTextStyle: {
    fontSize: fontSize(18),
    alignSelf: 'center',
    marginTop: hp(50),
  },
});

export default style;

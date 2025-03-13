import { StyleSheet } from 'react-native';

import { colors } from '@utils/colors';
import { fontSize, hp, wp } from '@utils/helper';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  forgotPasswordTextStyle: {
    marginTop: hp(30),
    fontSize: fontSize(24),
  },

  resetButtonStyle: {
    marginTop: hp(40),
  },
  mainView: { marginHorizontal: wp(20) },
});
export default style;

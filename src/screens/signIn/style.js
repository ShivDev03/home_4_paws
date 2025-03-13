import { StyleSheet } from 'react-native';

import { colors } from '@utils/colors';
import { fontSize, hp, wp } from '@utils/helper';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    paddingHorizontal: wp(10),
  },

  signInTextStyle: {
    fontSize: fontSize(18),
    marginTop: hp(50),
  },
  forgotPasswordTextStyle: {
    alignSelf: 'flex-end',
    marginTop: hp(10),
  },
  signInButtonStyle: {
    marginTop: hp(20),
  },
  separatorView: {
    flexDirection: 'row',
    marginTop: hp(45),
    alignItems: 'center',
    marginHorizontal: 10,
  },
  separatorText: {
    fontSize: fontSize(14),
    lineHeight: hp(19),
    color: colors.gray68,
    marginHorizontal: wp(10),
  },
  authIconView: { flexDirection: 'row', alignSelf: 'center' },
  googleImageStyle: {
    height: hp(38),
    width: wp(42),
    marginRight: wp(50),
    marginTop: hp(20),
  },
  fbImageStyle: {
    height: hp(38),
    width: wp(42),
    marginTop: hp(20),
  },
  doNotAccountView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: hp(40),
  },
  textInputContainerStyle: { marginTop: hp(20) },
});

export default style;

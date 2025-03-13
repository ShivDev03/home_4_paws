import { StyleSheet } from 'react-native';

import { colors } from '../../../utils/colors';
import { fontSize, hp, wp } from '../../../utils/helper';

const style = StyleSheet.create({
  labelTextStyle: {
    marginStart: wp(3),
    color: colors.black,
    fontSize: fontSize(14),
    lineHeight: hp(24),
  },
  textInputStyle: {
    color: colors.primaryBlack,
    fontSize: fontSize(18),
    lineHeight: hp(25),
    padding: hp(10),
    borderColor: colors.black,
    borderWidth: hp(1.5),
    borderRadius: 10,
    width: '90%',
  },
  safeEntryIconContainerStyle: {
    height: hp(24),
    width: wp(27),
    alignSelf: 'flex-end',
  },
  editTextContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    height: '100%',
    right: wp(10),
    justifyContent: 'center',
  },
  editTextStyle: {
    textDecorationLine: 'underline',
    fontSize: fontSize(12),
    lineHeight: hp(14),
    color: colors.primaryBlack,
  },
  errorMessageText: {
    fontSize: fontSize(12),
    lineHeight: hp(24),
    color: colors.error,
  },
  textInputView: {
    color: colors.primaryBlack,
    fontSize: fontSize(18),
    lineHeight: hp(25),
    padding: hp(10),
    borderColor: colors.black,
    borderWidth: hp(1.5),
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInputOriginStyle: {
    width: '90%',
  },
});

export default style;

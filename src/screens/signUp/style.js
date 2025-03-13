import { StyleSheet } from 'react-native';

import { colors } from '../../utils/colors';
import { fontSize, hp, wp } from '../../utils/helper';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  subContainer: {
    paddingHorizontal: wp(10),
  },
  spacer: {
    marginTop: hp(40),
  },
  signUpTextStyle: {
    marginVertical: hp(20),
    fontSize: fontSize(20),
  },
  doNotAccountView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: hp(40),
  },
});

export default style;

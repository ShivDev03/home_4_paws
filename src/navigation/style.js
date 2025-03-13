import { StyleSheet } from 'react-native';

import { colors } from '../utils/colors';
import { fontFamily, hp, wp } from '../utils/helper';

const style = StyleSheet.create({
  bottomBarContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    shadowColor: colors.DodgerBlue,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      height: 5,
      width: 5,
    },
  },
  bottomBarButtonStyle: {
    paddingVertical: hp(18),
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '25%',
  },
  bottomBarImageButtonStyle: {
    tintColor: colors.white,
    height: hp(18),
    width: wp(18),
  },
  bottomBarTextButtonStyle: { marginTop: hp(2), fontSize: 12, fontFamily: fontFamily.montserrat },
});

export default style;

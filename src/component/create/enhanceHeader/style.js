import { StyleSheet } from 'react-native';

import { colors } from '@utils/colors';
import { fontFamily, hp, wp } from '@utils/helper';

const style = StyleSheet.create({
  container: {
    marginTop: hp(30),
    marginHorizontal: wp(21),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  drawerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerButtonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(34),
    width: wp(34),
    shadowColor: colors.DodgerBlue,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 25,
    borderRadius: 8,
  },
  voiceCloneTextStyle: {
    fontFamily: fontFamily.poppins_bold,
    marginLeft: hp(15),
    fontSize: 18,
  },
  premiumContainer: {
    flexDirection: 'row',
  },
  starPointButtonStyle: {
    height: 36,
    width: 67,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(9),
    borderRadius: 8,
    justifyContent: 'space-between',
  },
  starPointTextStyle: {
    fontFamily: fontFamily.poppins_bold,
  },
  premiumButtonStyle: {
    width: 35,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginLeft: 6,
  },
});

export default style;

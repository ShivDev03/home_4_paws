import { StyleSheet } from 'react-native';

import { colors } from '../../../utils/colors';
import { fontFamily, hp, wp } from '../../../utils/helper';

const style = StyleSheet.create({
  mainContainer: {
    marginTop: hp(36),
    marginHorizontal: hp(20),
    borderRadius: 10,
    shadowColor: colors.primaryBlack,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.16,
    shadowRadius: 25,
  },
  container: {
    height: hp(75),
    borderBottomWidth: 1,
  },
  textInputStyle: { fontSize: 13, fontFamily: fontFamily.poppins_regular, paddingLeft: 15, paddingTop: 15 },
  googleTranslationView: {
    height: hp(34),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(15),
    paddingVertical: hp(5),
  },
  playBackView: { flexDirection: 'row', alignItems: 'center' },
  playTextStyle: {
    marginLeft: wp(5),
    fontFamily: fontFamily.inter,
  },
});

export default style;

import { Dimensions, StyleSheet } from 'react-native';

import { colors } from '@utils/colors';
import { fontFamily, hp, wp } from '@utils/helper';

const style = StyleSheet.create({
  container: { flex: 1 },
  imageStyle: {
    height: hp(330),
    width: wp(353),
    alignSelf: 'center',
    marginTop: hp(14),
    resizeMode: 'stretch',
  },
  artistNameView: {
    marginTop: hp(34),
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: wp(20),
    justifyContent: 'space-between',
  },
  artistNameTextStyle: {
    fontFamily: fontFamily.poppins_bold,
    fontSize: 21.3,
  },
  swiperFlatListStyle: {
    width: Dimensions.get('window').width,
  },
  sliderStyle: { marginHorizontal: 20, marginTop: hp(20) },
  timeView: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  timeText: {
    fontFamily: fontFamily.poppins_regular,
    color: colors.DodgerBlue,
    fontSize: 11.36,
  },
  shareButtonStyle: { alignSelf: 'center', position: 'absolute', bottom: 31 },
});

export default style;

import { StyleSheet } from 'react-native';

import { colors } from '../../utils/colors';
import { fontFamily, hp, screenWidth, wp } from '../../utils/helper';

const style = StyleSheet.create({
  container: { flex: 1 },
  bgImageStyle: {
    height: 475, // Adjust the height to cover only the top half of the image
    width: screenWidth,
    position: 'absolute',
  },
  linearGradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10, // Adjust the border radius as needed
    overflow: 'hidden',
  },
  firstLineHeadingStyle: {
    marginTop: hp(293),
    alignSelf: 'center',
    fontSize: 24,
    fontFamily: fontFamily.poppins_bold,
    color: colors.primaryBlack,
  },
  headingTextView: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  secondToLineHeadingStyle: {
    alignSelf: 'center',
    fontSize: 24,
    fontFamily: fontFamily.poppins_bold,
    color: colors.primaryBlack,
  },
  secondLineHeadingStyle: {
    alignSelf: 'center',
    fontSize: 24,
    fontFamily: fontFamily.poppins_bold,
    color: colors.DodgerBlue,
  },
  detailMainView: {
    marginTop: hp(20),
    marginHorizontal: wp(26),
  },
  detailSubView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(11),
  },
  rightIconStyle: {
    marginRight: wp(12),
  },
  textStyle: {
    fontFamily: fontFamily.poppins_regular,
    fontSize: 15,
    color: colors.black,
  },
});

export default style;

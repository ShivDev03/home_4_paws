import { Dimensions, StyleSheet } from 'react-native';

import { colors } from '../../../utils/colors';
import { fontFamily, hp, wp } from '../../../utils/helper';

const style = StyleSheet.create({
  container: { marginTop: hp(14) },
  listMainViewStyle: {
    backgroundColor: 'white',
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    borderRadius: 15,
    paddingVertical: hp(15),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: wp(10),
    paddingRight: wp(15),
  },
  imageAndTextStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImageListStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  imageViewStyle: {
    width: wp(60),
    height: hp(60),
  },
  textStyle: {
    fontFamily: fontFamily.poppinsMedium,
    marginHorizontal: wp(15),
    width: '65%',
  },
  threeDotButtonStyle: {},
  buttonContainerView: {
    width: '30%',
    position: 'absolute',
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: colors.black,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    marginTop: hp(75),
    marginLeft: '55%',
    borderRadius: 31,
    justifyContent: 'space-around',
    paddingVertical: hp(8),
  },
});

export default style;

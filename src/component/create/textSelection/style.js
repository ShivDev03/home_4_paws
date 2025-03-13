import { StyleSheet } from 'react-native';

import { colors } from '../../../utils/colors';
import { fontFamily, hp, wp } from '../../../utils/helper';

const style = StyleSheet.create({
  container: {
    marginTop: hp(30),
  },
  textHeadingStyle: {
    fontFamily: fontFamily.poppins_bold,
    marginLeft: wp(20),
  },
  mainTextContainerViewStyle: {
    padding: 9,
    marginRight: 7,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  flatListStyle: {
    marginTop: hp(10),
    paddingVertical: 20,
    marginLeft: wp(20),
  },
  textContainerViewStyle: {
    padding: 9,
    marginVertical: 15,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  secondFlatlistStyle: {
    paddingHorizontal: 20,
  },
});

export default style;

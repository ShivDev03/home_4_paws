import { StyleSheet } from 'react-native';

import { fontFamily, hp, wp } from '../../../utils/helper';

const style = StyleSheet.create({
  container: { marginTop: hp(30), marginHorizontal: wp(20) },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectVoiceTextStyle: {
    fontFamily: fontFamily.poppins_bold,
    fontSize: 17,
  },
  seeAllTextStyle: {
    fontFamily: fontFamily.poppins_regular,
    fontSize: 14,
  },
  flatListStyle: { marginTop: hp(20) },
  generatorButtonStyle: {
    marginTop: hp(40),
    width: 207,
    height: 37,
    alignSelf: 'center',
    borderRadius: 31,
    justifyContent: 'center',
    alignItems: 'center',
  },
  generatorTextStyle: {
    fontSize: 15,
    fontFamily: fontFamily.inter,
    fontWeight: 'bold',
    lineHeight: 18.5,
  },
  listViewStyle: { alignItems: 'center', marginRight: 13 },
});

export default style;

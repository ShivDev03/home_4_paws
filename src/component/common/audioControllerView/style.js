import { StyleSheet } from 'react-native';

import { colors } from '@utils/colors';
import { fontFamily, hp, wp } from '@utils/helper';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: hp(30),
    marginHorizontal: wp(20),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  playButton: {
    backgroundColor: colors.white,
    paddingVertical: 24,
    // paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 100,
    aspectRatio: 1,
    justifyContent: 'center',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowColor: colors.DodgerBlue,
  },
  forwardButtonOnPress: { transform: [{ rotate: '180deg' }] },
});

export default style;

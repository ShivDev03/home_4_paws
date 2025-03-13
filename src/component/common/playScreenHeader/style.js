import { StyleSheet } from 'react-native';

import { fontFamily, hp } from '@utils/helper';

const style = StyleSheet.create({
  container: { marginTop: hp(25), flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: hp(20) },
  textHeadingStyle: { fontFamily: fontFamily.poppins_bold, fontSize: 18 },
});

export default style;

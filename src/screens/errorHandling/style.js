import { StyleSheet } from 'react-native';

import { colors } from '@utils/colors';
import { fontSize, hp } from '@utils/helper';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: hp(8),
    textAlign: 'center',
  },
  title: {
    fontSize: fontSize(18),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: {
    fontSize: fontSize(48),
  },
  text: {
    marginVertical: hp(16),
  },
});

export default style;

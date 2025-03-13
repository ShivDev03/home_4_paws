import { StyleSheet } from 'react-native';

import { colors } from '../../../utils/colors';
import { hp } from '../../../utils/helper';

const style = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0.7,
    borderColor: colors.black,
    height: hp(1),
  },
});
export default style;

import { StyleSheet } from 'react-native';

import { colors } from '@utils/colors';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  userContainer: { flexDirection: 'row', alignItems: 'center' },
  userImageStyle: { height: 55, width: 55 },
  userTextNameStyle: { fontSize: 18, fontWeight: 'bold', color: colors.pureBlack },
});

export default style;

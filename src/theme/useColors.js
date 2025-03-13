import { useColorScheme } from 'nativewind';

import { darkColors, lightColors } from './themeColors';

const UseColors = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const isDark = colorScheme === 'dark';
  const themeColors = isDark ? darkColors : lightColors;
  return { colorScheme, toggleColorScheme, isDark, themeColors };
};
export default UseColors;

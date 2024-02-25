import { themes as defaultTamaguiThemes } from '@tamagui/themes';
import * as themeColors from 'themes/colors';

const userDefinedThemes = {
  ...defaultTamaguiThemes,
  dark: {
    ...defaultTamaguiThemes.dark,
    primary: themeColors.primaryDark.primary2,
    secondary: themeColors.secondaryDark.secondary2,
    background: themeColors.primaryDark.primary3,
    tertiary: themeColors.tertiaryDark.tertiary2,
    color: themeColors.colorDark.color1,
    ...themeColors.primaryDark,
    ...themeColors.secondaryDark,
    ...themeColors.tertiaryDark,
    ...themeColors.backgroundDark,
    ...themeColors.colorDark,
  },
  //? at the moment we are not using light color
  light: {
    ...defaultTamaguiThemes.light,
    primary: themeColors.primaryDark.primary2,
    secondary: themeColors.secondaryDark.secondary2,
    tertiary: themeColors.tertiaryDark.tertiary2,
    background: '#ffffff',
    color: '#000000',
    ...themeColors.primaryDark,
    ...themeColors.secondaryDark,
    ...themeColors.tertiaryDark,
    ...themeColors.backgroundDark,
    ...themeColors.colorDark,
    // ? Light color should be here
  },
};

export default userDefinedThemes as typeof userDefinedThemes;

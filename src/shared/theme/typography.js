import {PixelRatio} from 'react-native';

// Font family variable
const fontFamily = 'Montserrat';

const typography = {
  // Font size scaling function
  /**
   * Scale a font size proportionally based on the device's pixel density.
   * @function scaleFont
   * @param {number} size - The font size to scale.
   * @returns {number} - The scaled font size.
   */
  scaleFont: size => size * PixelRatio.getFontScale(),

  // Font families
  regular: `${fontFamily}-Regular`,
  bold: `${fontFamily}-Bold`,
  italic: `${fontFamily}-Italic`,
  boldItalic: `${fontFamily}-BoldItalic`,
  light: `${fontFamily}-Light`,
  lightItalic: `${fontFamily}-LightItalic`,
  semiBold: `${fontFamily}-SemiBold`,
  semiBoldItalic: `${fontFamily}-SemiBoldItalic`,
  extraLight: `${fontFamily}-ExtraLight`,
  extraLightItalic: `${fontFamily}-ExtraLightItalic`,
  thin: `${fontFamily}-Thin`,
  thinItalic: `${fontFamily}-ThinItalic`,
  medium: `${fontFamily}-Medium`,
  mediumItalic: `${fontFamily}-MediumItalic`,
  extraBold: `${fontFamily}-ExtraBold`,
  extraBoldItalic: `${fontFamily}-ExtraBoldItalic`,
  black: `${fontFamily}-Black`,
  blackItalic: `${fontFamily}-BlackItalic`,
};

export default typography;

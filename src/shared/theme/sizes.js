import {Dimensions} from 'react-native';

// Get the dimensions of the current device window
const {height: deviceHeight, width: deviceWidth} = Dimensions.get('window');

// Define the guideline base height and width based on the main test device
const guidelineBaseHeight = 667; // @The height of the main test device
const guidelineBaseWidth = 267; // @The width of the main test device

/**
 * A utility object for scaling sizes based on the device's dimensions
 * @namespace scaleSize
 */
const scaleSize = {
  /**
   * Scale a size proportionally based on the device's height
   * @function height
   * @param {number} size - The size to scale
   * @returns {number} - The scaled size
   */
  height: size => size * (deviceHeight / guidelineBaseHeight),

  /**
   * Scale a size proportionally based on the device's width
   * @function width
   * @param {number} size - The size to scale
   * @returns {number} - The scaled size
   */
  width: size => size * (deviceWidth / guidelineBaseWidth),
};

export default scaleSize;

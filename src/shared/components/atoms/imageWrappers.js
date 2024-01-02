import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {getShadow} from '@shared/styles';

/**
 * CircularImageWrapper component displays an image within a circular container.
 * @namespace CircularImageWrapper
 * @param {string} path - The path to the image source.
 * @param {number} radius - The radius of the circular container.
 */
export const CircularImageWrapper = ({path, radius}) => {
  return (
    <View
      style={[
        styles.container,
        {width: radius * 2, height: radius * 2, borderRadius: radius},
      ]}>
      <Image style={styles.image} source={path} />
    </View>
  );
};

/**
 * StyleSheet for CircularImageWrapper component.
 * @namespace styles
 */
const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    ...getShadow(),
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

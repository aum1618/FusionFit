import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import scaleSize from '../../theme/sizes';
import {AppContext} from '../../../services/context/app';

/**
 * CircularImageWrapper component displays an image within a circular container.
 * @namespace CircularIconWrapper
 */
export const CircularIconWrapper = ({size, children}) => {
  const {color} = useContext(AppContext);
  return (
    <View
      style={[
        styles.container,
        {
          height: scaleSize.height(size),
          width: scaleSize.width(size),
          backgroundColor: color.background,
          borderColor: color.border,
        },
      ]}>
      {children}
    </View>
  );
};

/**
 * StyleSheet for CircularIconWrapper component.
 * @namespace styles
 */
const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 999,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

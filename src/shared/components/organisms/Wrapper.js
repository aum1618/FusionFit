import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '@shared/theme/colors';

const Wrapper = ({children}) => {
  return <View style={styles.wrapper}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.light.background,
  },
});

export default Wrapper;

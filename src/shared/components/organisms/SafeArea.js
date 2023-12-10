import React from 'react';
import {SafeAreaView, StyleSheet, Platform, StatusBar} from 'react-native';

const SafeArea = ({children}) => {
  return <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default SafeArea;

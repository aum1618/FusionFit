import React, {useContext} from 'react';
import Wrapper from '@shared/components/organisms/Wrapper';
import Header from '@shared/components/organisms/Header';
import {Image, TouchableOpacity, View, StyleSheet} from 'react-native';
import {getPadding} from '../../../shared/styles/sizes';
import {AppContext} from '../../../services/context/app';
import scaleSize from '../../../shared/theme/sizes';
import TextTag from '../../../shared/components/atoms/TextTag';
import typography from '../../../shared/theme/typography';
import {imagePaths} from '../../../shared/constants/imagePaths';

export default function Presenter() {
  const {color} = useContext(AppContext);
  const styles = getStyles(color);

  return (
    <Wrapper>
      <Header />
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.imageContainer}>
            <Image
              source={imagePaths.person}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.backgroundCircle} />
            <TextTag size={16} tint={color.white}>
              Today, 8 July
            </TextTag>
            <TextTag size={26} tint={color.white} weight={typography.bold}>
              1834 steps
            </TextTag>
            <TouchableOpacity style={styles.button}>
              <TextTag size={10} weight={typography.bold} tint={color.primary}>
                Track your activity
              </TextTag>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: scaleSize.height(10),
          }}>
          <View style={{flex: 0.25}} />
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TextTag size={16} weight={typography.bold} tint={color.primary}>
              1834
            </TextTag>
            <TextTag size={14} tint={color.secondary}>
              cal
            </TextTag>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TextTag size={16} weight={typography.bold} tint={color.primary}>
              0.04
            </TextTag>
            <TextTag size={14} tint={color.secondary}>
              km
            </TextTag>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TextTag size={16} weight={typography.bold} tint={color.primary}>
              34
            </TextTag>
            <TextTag size={14} tint={color.secondary}>
              min
            </TextTag>
          </View>
          <View style={{flex: 0.25}} />
        </View>
      </View>
    </Wrapper>
  );
}

const getStyles = color =>
  StyleSheet.create({
    container: {
      ...getPadding(20),
    },
    card: {
      borderRadius: 16,
      height: scaleSize.height(150),
    },
    imageContainer: {
      height: 200,
      width: 200,
      position: 'absolute',
      zIndex: 100,
      bottom: -10,
      right: scaleSize.width(-10),
    },
    image: {
      height: '100%',
      width: '100%',
    },
    contentContainer: {
      flex: 1,
      overflow: 'hidden',
      justifyContent: 'center',
      ...getPadding(30),
      borderRadius: 16,
      backgroundColor: color.secondary,
    },
    backgroundCircle: {
      height: scaleSize.height(180),
      width: scaleSize.height(180),
      opacity: 0.3,
      borderRadius: 999,
      backgroundColor: color.primary,
      position: 'absolute',
      left: -scaleSize.height(40),
      bottom: -scaleSize.width(50),
    },
    button: {
      paddingVertical: scaleSize.height(4),
      marginVertical: scaleSize.height(4),
      paddingHorizontal: scaleSize.width(12),
      borderRadius: 999,
      backgroundColor: color.white,
      alignSelf: 'flex-start',
    },
  });

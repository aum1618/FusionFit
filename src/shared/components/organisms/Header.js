import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {CircularImageWrapper} from '@shared/components/atoms/imageWrappers';
import {CircularIconWrapper} from '@shared/components/atoms/iconWrapper';
import {Calendar} from 'lucide-react-native';
import {AppContext} from '@services/context/app';
import TextTag from '@shared/components/atoms/TextTag';
import typography from '@shared/theme/typography';
import {getPadding} from '@shared/styles/sizes';
import scaleSize from '@shared/theme/sizes';
import {imagePaths} from '../../constants/imagePaths';

const Header = () => {
  const {color} = useContext(AppContext);

  const size = 54;

  return (
    <View style={styles.container}>
      <CircularImageWrapper
        path={imagePaths.avatar}
        radius={scaleSize.height(size / 2)}
      />
      <View style={styles.textContainer}>
        <TextTag size={12} tint={color.placeholder}>
          Hey Umer!
        </TextTag>
        <TextTag size={16} weight={typography.bold}>
          Thursday, 12 November
        </TextTag>
      </View>
      <CircularIconWrapper size={size}>
        <Calendar size={scaleSize.width(16)} color={color.text} />
      </CircularIconWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    ...getPadding(20),
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: scaleSize.width(10),
  },
});

export default Header;

import scaleSize from '@shared/theme/sizes';

export const getPadding = size => {
  return {
    paddingVertical: scaleSize.height(size),
    paddingHorizontal: scaleSize.width(size),
  };
};

export const getMargin = size => {
  return {
    marginVertical: scaleSize.height(size),
    marginHorizontal: scaleSize.width(size),
  };
};

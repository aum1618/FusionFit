module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.json'],
        alias: {
          '@assets': './src/assets',
          '@screens': './src/screens',
          '@services': './src/services',
          '@navigation': './src/navigation',
          '@shared': './src/shared',
        },
      },
    ],
  ],
};

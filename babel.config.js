module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
      },
    ],
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ts',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
          '.svg',
          '.jpg',
          '.png',
        ],
        alias: {
          '*': './src',
          components: './src/components',
          constants: './src/constants',
          hooks: './src/hooks',
          screens: './src/screens',
          stores: './src/stores',
          utils: './src/utils',
          configs: './src/configs',
          data: './src/data',
          api: './src/api',
          assets: './assets',
          navigation: './src/navigation',
        },
      },
    ],
  ],
};

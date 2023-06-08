module.exports = {
  project: {
    ios: {},
    android: {},
  },
  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        ios: null, // disable ios platform, other platforms will still autolink if provided
      },
    },
    'react-native-push-notification': {
      platforms: {
        ios: null, // disable ios platform, other platforms will still autolink if provided
      },
    },
    '@types/react-native-push-notification': {
      platforms: {
        ios: null, // disable ios platform, other platforms will still autolink if provided
      },
    },
  },
  assets: ['./assets/fonts', './assets/images'],
};

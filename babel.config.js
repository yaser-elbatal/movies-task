module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    ["module-resolver",

      {
        root: ".",
        alias: {
          "@components": "./src/components",
          "@utils": "./src/utils",
          "@locale": "./src/locale",
          "@actions": "./src/store/actions",
          "@routes": "./src/navigation/routes-navigation",
          "@screens": "./src/screens",
          "@store": "./src/store",
          "@api": "./src/services",
          "@reducers": './src/store/reducers'

        },
      },
    ]
  ],
};

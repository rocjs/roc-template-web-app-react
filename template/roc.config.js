module.exports = {
  settings: {
    runtime: {
      applicationName: 'Playground',
      port: 3000,
      serve: ['public', 'build/client'],
      favicon: 'favicon.png',
    },
    build: {
      reducers: 'src/redux/reducers.js',
      routes: 'src/routes/index.js',
    },
    test: {
      tests: {
        pattern: /test/i,
        path: 'tests'
      }
    },
  },
  action: () => (rocObject) => {
    if (rocObject.hook === 'build-webpack' && rocObject.settings.build.mode === 'test') {
      const externals = {
        'cheerio': 'window',
        'react-dom': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      };
      return () => () => {
        rocObject.previousValue.buildConfig.externals = externals;
        return rocObject.previousValue;
      };
    }
  },
};

module.exports = {
  settings: {
    runtime: {
      applicationName: '{{ title }}',
      port: {{ port }},
      serve: ['public', 'build/client'],
      favicon: 'favicon.png',
    },
    build: {
      reducers: 'src/redux/reducers.js',
      routes: 'src/routes/index.js',
    },
    dev: {
      browsersync: {
        options: {
          open: true,
        },
      },
    },
  },
};

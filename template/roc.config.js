module.exports = {
  settings: {
    runtime: {
      applicationName: '{{ rocTitleName }}',
      port: {{ rocPort }},
      serve: ['public', 'build/client'],
      favicon: 'favicon.png',
    },
    build: {
      reducers: 'app/redux/reducers.js',
      routes: 'app/routes/index.js',
    },
  },
};

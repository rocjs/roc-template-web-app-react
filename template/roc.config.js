module.exports = {
  settings: {
    runtime: {
      applicationName: '{{ title }}',
      port: {{ port }},
      serve: ['public', 'build/client'],
      favicon: 'favicon.png',
      {{#if fetchExample}}
      // fetch settings (these are the defaults)
      fetch: {
        server: ['fetch'], // hook used by server for fetching
        client: {
          beforeTransition: ['fetch'], // hook used by client for fetching that block route transitions
          afterTransition: ['defer', 'deferDone'], // hook used by client for fetching that does not block route transitions
          parallel: false, // if we should start non-blocking fetches in parallel with blocking ones
        },
      },
      {{/if}}
    },
    build: {
      {{#if reduxExample}}
      reducers: 'src/redux/reducers.js',
      {{/if}}
      routes: 'src/routes.js',
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

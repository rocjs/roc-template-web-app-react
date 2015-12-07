module.exports = {
    config: {
        applicationName: '{{{ rocAppName }}}',
        port: {{{ rocPort }}},
        build: {
            reducers: 'reducers.js',
            routes: 'routes.js'
        }
    }
};

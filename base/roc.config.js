module.exports = {
    config: {
        applicationName: '{{{ appName }}}',
        port: {{{ rocPort }}},
        build: {
            entry: { client: '', server: ''},
            reducers: 'reducers.js',
            routes: 'routes.js'
        }
    }
};

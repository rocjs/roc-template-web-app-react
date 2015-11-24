module.exports = {
    config: {
        port: {{{ rocPort }}},
        build: {
            entry: { client: '', server: ''},
            reducers: 'reducers.js',
            routes: 'routes.js'
        }
    }
};

const defaultPrompt = require('roc').prompt;
const baseConfig = require('roc-web-react').baseConfig;

const prompt =
    defaultPrompt.concat([{
        type: 'input',
        name: 'rocPort',
        message: 'What\'s the port for the application?',
        default: baseConfig.port
    }, {
        type: 'input',
        name: 'rocAppName',
        message: 'What do you what to use for <title>?'
    }]);

module.exports = {
    prompt: prompt
}

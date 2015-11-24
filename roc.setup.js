const defaultPrompt = require('roc').prompt;
const baseConfig = require('roc-web-react').baseConfig;

const prompt =
    defaultPrompt.concat([{
        type: 'input',
        name: 'rocPort',
        message: 'What\'s the port for the application?',
        default: baseConfig.port
    }]);

module.exports = {
    prompt: prompt
}

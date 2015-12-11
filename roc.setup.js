const defaultPrompt = require('roc').prompt;

const prompt =
    defaultPrompt.concat([{
        type: 'input',
        name: 'rocPort',
        message: 'What\'s the port for the application?',
        default: 3000
    }, {
        type: 'input',
        name: 'rocAppName',
        message: 'What do you what to use for <title>?',
        default: 'My Roc Application'
    }]);

module.exports = {
    prompt: prompt
}

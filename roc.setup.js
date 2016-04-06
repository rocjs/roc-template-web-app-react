const chalk = require('chalk');
const defaultPrompt = require('roc').defaultPrompt;

const prompt =
    defaultPrompt.concat([{
        type: 'input',
        name: 'rocPort',
        message: 'What\'s the port for the application?',
        default: 3000
    }, {
        type: 'input',
        name: 'rocTitleName',
        message: 'What do you what to use for <title>?',
        default: 'My Roc Application'
    }]);

module.exports = {
    prompt: prompt,
    completionMessage: `Start in development mode by running ${chalk.bold('roc dev')}.\n` +
    `It will open your default browser when ready.\n` +
    `You can change this by setting ${chalk.underline('dev.browsersync.open')} to ${chalk.underline('false')} in ${chalk.underline('roc.config.js')}.`
}

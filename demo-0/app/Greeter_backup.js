/**
 * @file webpack - greeter.js
 * @author Yuan Yanjun
 */

var config = require('./config.json');

module.exports = function () {
    var greet = document.createElement('div');
    // greet.textContent = 'Hi there and greetings test!';
    greet.textContent = config.greetText;
    return greet;
};

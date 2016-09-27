/**
 * @file webpack - greeter.js
 * @author Yuan Yanjun
 */

module.exports = function () {
    var greet = document.createElement('div');
    greet.textContent = 'Hi there and greetings!';
    return greet;
};

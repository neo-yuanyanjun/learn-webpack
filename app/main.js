/**
 * @file main entrance
 * @author  Yuan Yanjun
 */

// var greeter = require('./Greeter.js');
// document.getElementById('root').appendChild(greeter());


// -------------------------------------------

import React from 'react';
import ReactDom from 'react-dom';
import Greeter from './Greeter';

import './main.css';

ReactDom.render(<Greeter />, document.getElementById('root'));


// import React from 'react';
// import {render} from 'react-dom';
// import Greeter from './Greeter';

// render(<Greeter />, document.getElementById('root'));

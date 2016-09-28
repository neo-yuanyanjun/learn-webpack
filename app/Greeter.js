/**
 * @file webpack - greeter.js
 * @author Yuan Yanjun
 */

import React, {Component} from 'react';
import config from './config.json';

import styles from './Greeter.css';

class Greeter extends Component {
    render() {
        var t = styles;
        return (
            <div className='root'>
                { config.greetText }
            </div>
        );
    }
}

export default Greeter;


// import React, {Component} from 'react';
// import config from './config.json';

// class Greeter extends Component {
//     render() {
//         return (
//             <div>
//                 { config.greetText }
//             </div>
//         );
//     }
// }

// export default Greeter;

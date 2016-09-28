/**
 * @file webpack - greeter.js
 * @author Yuan Yanjun
 */

import React, {Component} from 'react';
import config from './config.json';

class Greeter extends Component {
    render() {
        return (
            <div>
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

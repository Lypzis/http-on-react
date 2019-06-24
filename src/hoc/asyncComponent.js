import React, { Component } from 'react';

/* For implementing 'Lazy components' or 'split loading', for better download performance, 
so only when the component is needed it will be downloaded asynchronously */
const asyncComponent = importComponent => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount() {
            // will store the imported component into the state, if successfull(there is a script), right after 
            // the component is mounted.
            importComponent()
                .then(component => {
                    this.setState({component: component.default});
                });
        }

        render() {
            const C = this.state.component; // the component stored.

            // eventually returns a dynamic component along with all its properties,
            // if one is available, else, returns null.
            return C ? <C {...this.props} /> : null;
        }
    }
};

export default asyncComponent;
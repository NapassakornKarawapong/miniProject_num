import React, { Component } from 'react';

import Count from './components/basic-hooks';
import { NumberStatus, RandomNumber } from './components/custom-hooks';

class App extends Component {
    //Do stuff

    //Render
    render() {
        return (
            <React.Fragment>
                <h3>Basic Hooks [Num]</h3>
                <Count />

                <h3>The custom React Hooks</h3>
                <NumberStatus />
                <RandomNumber />

                <p><i>Tip!: Open the web browser console to view more results.</i></p>
            </React.Fragment>
        );
    }
}

export default App;
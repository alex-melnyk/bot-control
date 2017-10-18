import React, {Component} from 'react';
import {Provider} from 'react-redux';
import appStore from './src/store';
import AppNavigator from './src/navigation';

export default class App extends Component {
    render() {
        return (
            <Provider store={appStore}>
                <AppNavigator/>
            </Provider>
        );
    }
}